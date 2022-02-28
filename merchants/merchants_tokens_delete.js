//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API merchants/tokens DELETE 
// method. It provides a convenient way to delete a merchant token.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful HTTP status code 200 will be displayed (and the token will
//    no longer be listed using the merchant/tokens GET method).
//-----------------------------------------------------------------------------

// This module allows the code to run on Node.js, it's not required if running in a browser.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/merchants/tokens';

// need to specify tokenId to delete
var tokenId = '0b070538-58b2-49d0-8769-738d2538d161';

const options = {
    method: 'DELETE',
    headers: {
        Accept: 'application/json',
        Authorization: "Bearer " + jwtToken
    }
};

fetch(`${url}/${tokenId}`, options)
    .then(response => response.status)
    // Should get response status 200 on success
    .then(respStatus => console.log(respStatus))
    .catch(err => console.error(err));

