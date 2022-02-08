// Gets a list of merchants that the authenticated user is authorised for.

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/user/merchants';

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch(url, options)
    .then(response => response.json())
    .then(responseJson => {
        // Returns JSON objects containing basic details about the user's current merchant context and an array of 
        // also authorised merchants.
        console.log(responseJson);
        // If an array of merchant id's associated with the current user is all that is required extract as follows:
        var merchantIds = responseJson.merchants.map(merchant => merchant.id);
        console.log(merchantIds)
    })
    .catch(err => console.error(err));
