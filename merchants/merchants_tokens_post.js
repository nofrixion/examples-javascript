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

// Remember, the JWT access token must be securely stored - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const url = "https://api-sandbox.nofrixion.com/api/v1/merchants/tokens";

// Build data object.
let data = new FormData();
data.append("MerchantId", "ab4476a1-8364-4d13-91ce-f4c4ca4ee6be");
data.append("Description", "API created token");

const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwtToken
    },
    body: data
};

fetch(url, options)
    .then(response => response.json())
    // Merchant token returned in responseJson => MAKE SURE YOU SAVE THIS! (we don't store it)
    .then(responseJson => console.log(responseJson.token))
    .catch(err => console.error(err));
