// This module allows the code to run on Node.js, it's not required if running in a browser.
const fetch = require("cross-fetch");

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts/';

// need to specify payout Id
var payoutId = "8db7907c-98fb-4fa9-f651-08d9e9d0fe46";

const options = {
    method: "DELETE",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwtToken
    }
};

fetch(url + payoutId, options)
    .then(response => response.status)
    // Should get response status 200 on success
    .then(respStatus => console.log(respStatus))
    .catch(err => console.error(err));

