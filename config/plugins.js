module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-postmark",
      providerOptions: {
        apiKey: env('POSTMARK_API_KEY')
      },
      settings: {
        defaultMessageStream: env('POSTMARK_API_DEFAULT_STREAM'),
        defaultFrom: env('POSTMARK_API_DEFAULT_FROM'),
        defaultTo: env('POSTMARK_API_DEFAULT_TO'),
        defaultReplyTo: env('POSTMARK_API_DEFAULT_REPLYTO'),
        defaultSubject: env('POSTMARK_API_DEFAULT_SUBJECT'),
        defaultText: env('POSTMARK_API_DEFAULT_TEXT'),
        defaultVariables: {
          sentBy: env('POSTMARK_API_DEFAULT_SENTBY'),
        },
      },
    }
  },
})