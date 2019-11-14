# email_server

## Description 
A simple email server that receive requests via POST, along with some parameters (such as "to" address, "from" address etc.), and then relays information to a real third party email server (in this case, AWS' Simple Email Service).

### Requirements
1. Listening on any port, listen on endpoint: 
    `/send-email`

2. This endpoint will accept the following parameters: 
    - from
    - to
    - subject
    - body_text
    - body_html

3. Using these parameters the server should be able to instantiate an internal email service class based on some server JSON/YAML configuration. Instantiated using a factory, and ensure they both have the same interface so they can be used interchangeably.

4. A second endpoint called `/bounced-email` that takes a single argument, email_address, which we use to inform the server that this email is blacklisted. 

5. This endpoint stores the email address in a database, Any future calls to `/send-email` should first check if this email is in the database, and if so, reject sending that email.

6. The server responses should all be in JSON