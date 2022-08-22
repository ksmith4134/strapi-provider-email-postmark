"use strict";

module.exports = {
  sendEmail: async () => {
    
    await strapi.plugins.email.services.email.send({
      // Add non-default email options here
    });

    /* If the code above does not work, try this: */
    // await strapi.plugins['email'].services.email.send({});

  }
}