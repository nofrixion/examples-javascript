// Gets the transaction history for a specified account

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

// need to specify the account to get transactions for
var accountId = 'A120P0JR';

// by default each call will return 20 transactions, we can change this using a query parameter as shown below.
var queryParams = '?size=10'

// the example below would return the page of 10 transactions following the options set above.
// var queryParams = '/transactions?size=10&page=1'

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

