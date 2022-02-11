//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API payouts PUT 
// method. It provides a convenient way to modify a previously created payout.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful user the updated payout ID will be displayed.
//-----------------------------------------------------------------------------

// These packages allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts/';

// need to specify payout Id to update
var payoutId = "8db7907c-98fb-4fa9-f651-08d9e9d0fe46";

// Build payoutData object with updated details, could also get from form in front-end applications.
let payoutData = new FormData();
payoutData.append("AccountID", "A120P0JR");
payoutData.append("Currency", "EUR");
payoutData.append("Amount", "1.99");
payoutData.append("YourReference", "Updated payout");
payoutData.append("DestinationIBAN", "GB33BUKB20201555555555");
payoutData.append("DestinationAccountName", "Destination Name");
payoutData.append("TheirReference", "Their reference");

const options = {
    method: 'PUT',
    headers: {
        Accept: 'application/text',
        Authorization: 'Bearer ' + jwtToken
    },
    body: payoutData
};

fetch(url + payoutId, options)
    .then(response => response.text())
    // returns payment Id on successful update
    .then(responseText => console.log(responseText))
    .catch(err => console.error(err));

