//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API merchant/tokens POST 
// method. It provides a convenient way to create a merchant token.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the Merchant token is returned in the response body 
//    (save this in a safe place, it isn't stored in the NoFrixion systems).
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require("cross-fetch");
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = "https://api-sandbox.nofrixion.com/api/v1/merchant/tokens";

// Build data object.
let data = new FormData();
data.append("MerchantId", "a234eb2e-1118-4a69-b550-e945961790ab");
data.append("Description", "API created token");

const options = {
    method: "POST",
    headers: {
        Accept: "application/text",
        Authorization: "Bearer " + jwtToken
    },
    body: data
};

fetch(url, options)
    .then(response => response.text())
    // Merchant token returned in responseText => MAKE SURE YOU SAVE THIS! (we don't store it)
    .then(responseText => console.log(responseText))
    .catch(err => console.error(err));
