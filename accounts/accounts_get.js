// Get's accounts associated with the currently logged in user.

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/accounts';

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch(url, options)
    .then(response => response.json())
    // Resoponse JSON is an array of JSON objects with a list of accounts the user has access to
    .then(responseJson => {
        // displays complete list of account data
        console.log(responseJson);
        // alternatively extract array of account Ids (useful for source/destination account dialogs)
        console.log(responseJson.map(account => account.id))
    })
    .catch(err => console.error(err));

