# email_server

A simple backend email server that receive requests via POST, along with some parameters (such as "to" address, "from" address etc.), and then relays information to a real third party email server (in this case, AWS' Simple Email Service).

Built with node, express, mongoose and AWS SES.

## Instructions
- Clone this repo
- run `npm install` to install all dependencies
- run `npm run server` to run server
- Personally used Postman for testing

## Notes
- Requires AWS key and MongoURI from Mongoose

## Requirements
1. Listening on 5000, listen on endpoint: 
    `/send-email`

2. This endpoint will accept the following parameters: 
    - from
    - to
    - subject
    - body_text
    - body_html

3. Using these parameters the server should be able to instantiate an internal email service class based on some server JSON/YAML configuration. Instantiated using a factory, and ensure they both have the same interface so they can be used interchangeably.
    - `class/Email.js` is an example, but not used as Mongoose requires Schemas

4. A second endpoint called `/bounced-email` that takes a single argument, email_address, which is used to add the email to the blacklist.
    - a small feature I added was to check if it already is on the blacklist.

5. This endpoint stores the email address in a database. Future calls to `/send-email` first check if this email is in the database, and if so, reject sending that email.

6. The server responses should all be in JSON