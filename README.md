# UI Scaffold with PK Chooser

## Getting Started

Install dependencies:

```npm i -s```

Copy and rename the config file template:

```cp config.example.js config.js```

Start the web server

```npm start```

## Using a static Pubkeeper Server

Once your system is created and you're ready to move the UI into the public domain, you'll want to remove the Pubkeeper Server chooser and replace it with your system's production Pubkeeper details.

Open `config.js`, change `staticPubkeeper` to `true`, and enter your pubkeeper server details below. As well, we'd appreciate it if you removed the webAuth section from the auth0 section.

## Using your own Auth0 account for authentication

If you'd still like to use auth0 for webauth, you can create a free auth0 account [here](https://auth0.com/signup)

Once you have an auth0 account, create a new application, copy your credentials, open `config.js`, and update the webAuth section appropriately.
