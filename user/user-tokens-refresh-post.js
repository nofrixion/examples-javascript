//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API user/tokens/refresh 
// POST method. It provides a convenient way to refresh a user access token.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the new user access and refresh tokens will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/user/tokens/refresh';

// Example form data
const formData = new FormData();
formData.append("refreshToken", "AFNmCy_fXXQPViPaHNb5GQSpeMrKNAfLwIfzZl_BzGCZv");

const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json', 
        Authorization: 'Bearer ' + jwtToken
    },
    body: formData
};

fetch(url, options)
    .then(response => response.json())
    // the response json ...
    .then(response => console.log(response))
    .catch(err => console.error(err));