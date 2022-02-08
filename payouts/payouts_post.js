//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API payouts POST 
// method. It provides a way to initiate funds transfer to third party accounts
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful user the newly created payout ID will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts';

// Example form data
const form = new FormData();
form.append("AccountID", "A120P0JR");
form.append("Currency", "EUR");
form.append("Amount", "0.01");
form.append("YourReference", "Sender ref");
form.append("DestinationIBAN", "GB33BUKB20201555555555");
form.append("DestinationAccountName", "Test Account");
form.append("TheirReference", "Recipient ref");

const options = {
    method: 'POST',
    headers: {
        Accept: 'text/plain',
        Authorization: 'Bearer ' + jwtToken
    }
};

options.body = form;

fetch(url, options)
    .then(response => response.text())
    // the response text is the payout ID of the newly created payout.
    .then(response => console.log(response))
    .catch(err => console.error(err));