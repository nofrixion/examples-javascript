//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API payouts GET 
// method. It provides a convenient way to obtain a list of pending payouts.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful a JSON object containing a page of payouts will be displayed.
//-----------------------------------------------------------------------------

// This module allows the code to run on Node.js, it's not required if running in a browser.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/payouts';

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    }
};

fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));

