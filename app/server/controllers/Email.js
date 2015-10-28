'use strict';


var   mongoose = require('mongoose'),
    User = mongoose.model('User'),
    mailgun_api = process.env.MAILGUN_API_KEY,
    mailgun_domain = process.env.MAILGUN_DOMAIN,
    Mailgun = require('mailgun-js'),
    schedule = require('node-schedule'),
    Q = require('q'),
    moment = require('moment'),
//use nunjucks to render html templates w/ variables

    nunjucks = require('nunjucks');

// find any users Selling books that match the traders ISBN
var mailUsers = function (mailDay) {
    console.log('users fired');
    // setup promises
    var deffered = Q.defer();
    // find users with preferences.notificaitons that match today
    User.find().where('preferences.notifications.' + mailDay).equals(true).exec(
        function(err, user){
            var users = [];
            // handle error
            if (err) {
                deffered.reject(console.log('ERROR->> ' + err));
            } else {
                // put all users that match newly posted ISBN into array to later
                // be used to send email to each person with matched ISBN
                for (var i = user.length - 1; i >= 0; i--) {
                    users.push(user[i]);
                }
                deffered.resolve(users);
            }
        });
    return deffered.promise;
};

// function to generate custom email
// for given users and return a mailing array
var mailCreator = function(users) {
    var mailing = [];

    for (var i = users.length - 1; i >= 0; i--) {
        // get an email template and pass in some variables
        var email = swig.renderFile('someEMAIL template', {
            username: users[i].firstName
        });
        // add qualified users and their customized
        // email to the mailing
        mailing.push({
            user: users[i].email,
            email: email
        });
    }
    return mailing;
}

//var mailScheduler = function (job) {
    // set rules for scheduler
  //  var rule = new schedule.RecurrenceRule();
    //rule.dayOfWeek = [new schedule.Range(0, 6)];
    //rule.hour = 16;
    //rule.minute = 38;

    //schedule.scheduleJob(rule, job);
//};

// function to send user email given template and subject     
var mailSender = function (SellersEmail, subject, html) {

    // setup promises
    var deffered = Q.defer();
    // create new mailgun instance
    var mailgun = new Mailgun({
        apiKey: mailgun_api,
        domain: mailgun_domain
    });
    // setup the basic mail data
    var mailData = {
        from: 'Trader Email',
        to: SellersEmail,
        subject:  subject,
        html: html
    };
    // send your mailgun instance the mailData
    mailgun.messages().send(mailData, function (err, body) {
        // catch any errors
        if (err) {
            deffered.reject(console.log('ERROR->> ' + err));
        } else {
            deffered.resolve(body)
        }
    });

    return deffered.promise;
};

//use for testing

var mailDay = new Date();

// call the scheduler, which takes a function
// and pass in our mailing sequence
mailScheduler(function () {
    // find users with preferences set for now
    mailUsers(mailDay)
        .then(function (users) {
            // create a mailing to send email to users that match the book
            //ISBN
            var mailing = mailCreator(users);
            // for each User in mailing item, send them an email from the trader
            // who listed trade with the same ISBN

            for (var i = mailing.length - 1; i >= 0; i--) {
                //email users matching the ISBN with a Template
                mailSender(mailing[i].user,'Someone is looking for the book your selling!', mailing[i].email)
                    .then(function (res) {
                        console.log(res);
                    })
                    //catch any errors
                    .catch(function (err) {
                        console.log("ERROR ->> " + err)
                    })
            }
        })
});