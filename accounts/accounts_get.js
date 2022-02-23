//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API Accounts Get
// method. It provides a convenient way to retrieve a list of your payment
// accounts.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful a list of your accounts will be displayed.
//-----------------------------------------------------------------------------

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/accounts';

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch(url, options)
    .then(response => response.json())
    // Resoponse JSON is an array of JSON objects with a list of accounts the user has access to
    .then(responseJson => {
        // displays complete list of account data
        console.log(responseJson);
        // alternatively extract array of account Ids (useful for source/destination account dialogs)
        console.log(responseJson.map(account => account.id))
    })
    .catch(err => console.error(err));

