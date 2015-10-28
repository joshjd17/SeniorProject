'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    mailgun_api = process.env.MAILGUN_API_KEY,
    mailgun_domain = process.env.MAILGUN_DOMAIN,
    Mailgun = require('mailgun-js'),
    schedule = require('node-schedule'),
    Q = require('q'),
    moment = require('moment');

//find a user whos trade isbn matches a new selling isbn
