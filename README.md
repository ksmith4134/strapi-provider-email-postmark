# strapi-provider-email-postmark
- Custom Strapi (v4.2.0) email provider using Postmark
- This provider can be used with Strapi's authorization endpoints (register, forgot-password, reset-password)
- credit for the index.js file goes to [ijsto](https://github.com/ijsto/strapi-provider-email-postmark)


## Setup Steps

1. Make sure the plugin *@strapi/plugin-email*, is installed in your node_modules/@strapi folder. If not, install it.

2. Sign up for a Postmark account and get your API Key

3. Install *postmark* for node:
```
npm i postmark
```

4. Add the following to your *.env* variables:
```
POSTMARK_API_KEY=
POSTMARK_API_DEFAULT_STREAM=broadcast
POSTMARK_API_DEFAULT_FROM=
POSTMARK_API_DEFAULT_TO=
POSTMARK_API_DEFAULT_REPLYTO=
POSTMARK_API_DEFAULT_SUBJECT=Test Email from Strapi
POSTMARK_API_DEFAULT_TEXT=This is the body of my test email.
POSTMARK_API_SENTBY=strapi
```

5. In your root *package.json* add the following line to your dependencies:
```
"dependencies": {
    ...
    "strapi-provider-email-postmark": "file:providers/strapi-provider-email-postmark",
    ...
 },
 ```
 
6. **src/api/send-email**
    - Add the "send-email" folder (and code) in your *src/api* folder. The directory should be: *src/api/send-email*. You can use this API endpoint from your front-end to send email to your users.
 
7. **config/plugins.js**
    - Add the "email" object from the *plugins.js* file to your own *plugins.js* file in the root *config* foler. If you do not have a plugins.js file in your root config folder, add this one.
 
8. **providers**
    - Add the *strapi-provider-email-postmark* folder to your root *providers* folder. If you do not have a root providers folder, create one. The final directory should be *providers/strapi-provider-email-postmark*

9. **Run npm install**
    - Run *npm install* to ensure that all of your packages are up to date. If you experience problems, try deleting your cache folder, node_modules folder, and root package-lock.json file. Then run: *npm install*, *npm run build*, and finally *npm run develop*.
 
10. Adjust all necessary settings in the Strapi Admin Dashboard (see Strapi documentation)
    - Settings > Email Plugin > Configuration
    - Update your Roles in the Users & Permissions Plugin
