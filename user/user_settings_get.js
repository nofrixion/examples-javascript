// Gets a user setting for the authenticated user.

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/user/settings';

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch(url, options)
    .then(response => response.json())
    .then(responseJson => {
        // Returns JSON object containing the name, value and description of the user setting.
        console.log(responseJson);
    })
    .catch(err => console.error(err));


