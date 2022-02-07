// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require("cross-fetch");
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = "https://api-sandbox.nofrixion.com/api/v1/transfers/";

// Build transferData object.
let transferData = new FormData();
transferData.append("Amount", "1.00");
transferData.append("Currency", "EUR");
transferData.append("SourceAccount", "A120R2Y3");
transferData.append("DestinationAccount", "A120P0JR");
transferData.append("Reference", "My reference");
transferData.append("ExternalReference", "Ext reference");

const options = {
    method: "POST",
    headers: {
        Accept: "application/text",
        Authorization: "Bearer " + jwtToken
    },
    body: transferData
};

fetch(url, options)
    .then(response => response.json())
    // A JSON object containing the details of the transfer is returned.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));
