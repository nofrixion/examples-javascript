//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API Accounts/{accounId}/transactions 
// GET method. It provides a convenient way to retrieve a list of transactions for the specified
// account.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful a list of transactions and some metadata will be displayed.
//-----------------------------------------------------------------------------

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

// need to specify the account to get transactions for
var accountId = 'A120P0JR';

// by default each call will return 20 transactions, we can change this using a query parameter as shown below.
var queryParams = '?size=10'

var url = `https://api-sandbox.nofrixion.com/api/v1/accounts/${accountId}/transactions${queryParams}`;

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch(url, options)
    .then(response => response.json())
    .then(responseJson => {
        // the JSON response object contains an array of transactions, oldest first, the size specified in the query paramater (default =20)
        // it also contains properties detailing the current parameter settings, total number of transactions and total number of pages (starting at 0)
        console.log(responseJson);
    })
    .catch(err => console.error(err));

