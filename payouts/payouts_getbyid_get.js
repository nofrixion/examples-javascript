// This module allows the code to run on Node.js, it's not required if running in a browser.
const fetch = require("cross-fetch");

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts/getbyid/';

// You need to specify payout Id. 
// The payout ID of a newly created payout is returned by the /payouts endpoint POST method,
// a list of pending payouts can also be retreived using the /payouts endpoint GET method.
var payoutId = "8db7907c-98fb-4fa9-f651-08d9e9d0fe46";

const options = {
    method: "GET",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwtToken
    }
};

fetch(url + payoutId, options)
    .then(response => response.json())
    // Get the approval URL
    .then(responseJson => {
        // responseJson contains all payout details
        console.log(responseJson);
        // can also get the approval URL for a payout using this method.
        console.log(responseJson.approvePayoutUrl);
    })
    .catch(err => console.error(err));

