//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API payouts/getbyid/{id} GET 
// method. It provides a convenient way to obtain a pending payout information, including
// the URL used for payout approval.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful user the payout details will be displayed as a JSON object.
//-----------------------------------------------------------------------------

// This module allows the code to run on Node.js, it's not required if running in a browser.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/payouts/';

// You need to specify payout Id.
var payoutId = '1ec7a338-9535-4199-002a-08d9f815df7c';

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    }
};

fetch(baseUrl + payoutId, options)
    .then(response => response.json())
    // Get the approval URL
    .then(responseJson => {
        // responseJson contains all payout details
        console.log(responseJson);
        // can also get the approval URL for a payout using this method.
        console.log(responseJson.approvePayoutUrl);
    })
    .catch(err => console.error(err));

