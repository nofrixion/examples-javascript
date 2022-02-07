// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require("cross-fetch");
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts';

// Build payoutData object.
let payoutData = new FormData();
payoutData.append("AccountID", "A120P0JR");
payoutData.append("Currency", "EUR");
payoutData.append("Amount", "7.89");
payoutData.append("YourReference", "My reference");
payoutData.append("DestinationIBAN", "GB94BARC10201530093459");
payoutData.append("DestinationAccountName", "Destination Name");
payoutData.append("TheirReference", "Their reference");

const options = {
    method: "POST",
    headers: {
        Accept: "application/text",
        Authorization: "Bearer " + jwtToken
    },
    body: payoutData
};

fetch(url, options)
    .then(response => console.log(response.status)) //Expect '200' for success.
    .catch(err => console.error(err));
