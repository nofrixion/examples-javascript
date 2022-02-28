//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API payouts DELETE 
// method. It provides a way to delete a previously created payout.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful user HTTP status code 200 will be displayed.
//-----------------------------------------------------------------------------

// This module allows the code to run on Node.js, it's not required if running in a browser.
const fetch = require("cross-fetch");

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts/';

// need to specify payout Id
var payoutId = "1ec7a338-9535-4199-002a-08d9f815df7c";

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

