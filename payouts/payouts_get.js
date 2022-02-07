// This module allows the code to run on Node.js, it's not required if running in a browser.
const fetch = require("cross-fetch");

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts';

const options = {
    method: "GET",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwtToken
    }
};

fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));

