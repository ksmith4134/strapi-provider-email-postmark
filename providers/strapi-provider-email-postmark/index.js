'use strict';

const postmark = require('postmark');
const { removeUndefined } = require('@strapi/utils');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    var client = new postmark.ServerClient(providerOptions.apiKey);

    return {
      send: (options) => {
        return new Promise((resolve, reject) => {

          const {
            defaultMessageStream,
            defaultFrom,
            defaultTo,
            defaultReplyTo,
            defaultSubject,
            defaultText,
            defaultVariables = {},
          } = settings;

          const {
            messageStream,
            from,
            to,
            replyTo,
            subject,
            text,
            html,
            variables = {}
          } = options;

          const msg = {
            "MessageStream": messageStream || defaultMessageStream,
            "From": from || defaultFrom,
            "To": to || defaultTo,
            "ReplyTo": replyTo || defaultReplyTo,
            "Subject": subject || defaultSubject,
            "TextBody": text || defaultText,
            "HtmlBody": html
          };

          client.sendEmail(
            removeUndefined(msg), 
            function(error) {
              if (error) {
                console.log("There was an error sending your email.", error)
                reject(error);
              } else {
                console.log("Your email was sent.")
                resolve();
              }
          });
        });
      },
    };
  },
};