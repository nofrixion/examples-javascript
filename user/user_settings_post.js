
//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API user/settings POST 
// method. It provides a convenient way to update the current merchant a settings for  
// the authenticated user.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful HTTP status "200" will be displayed (and the new settings can be retrieved
//    using the user/settings GET method).
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require("cross-fetch");

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = "https://api-sandbox.nofrixion.com/api/v1/user/settings";

var settingName = "CurrentMerchantID";
var settingValue = "6f80138d-870b-4b07-8bc4-a4fd33a0d30f";
data = `userSettings[0].Name=${settingName}&userSettings[0].Value=${settingValue}f&userSettings[0].Description=desc`;

const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + jwtToken
    },
    body: data
};

fetch(url, options)
    // status 200 on success
    .then(response => console.log(response.status))
    .catch(err => console.error(err));
