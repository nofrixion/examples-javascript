//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API payouts/transfer POST 
// method. It provides a way to transfer funds between a merchant's accounts
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the transfer details will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require("cross-fetch");
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const url = "https://api-sandbox.nofrixion.com/api/v1/payouts/transfer/";

// Build transferData object.
let transferData = new FormData();
transferData.append("Amount", "1.00");
transferData.append("Currency", "EUR");
transferData.append("SourceAccount", "A120P0JR");
transferData.append("DestinationAccount", "A120R2Y3");
transferData.append("Reference", "My reference");
transferData.append("ExternalReference", "Ext reference");

const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwtToken
    },
    body: transferData
};

fetch(url, options)
    .then(response => response.json())
    // A JSON object containing the details of the transfer is returned.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));
