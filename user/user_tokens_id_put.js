//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API user/tokens/{id} 
// GET method. It provides a way to update a user token description.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the details of the updated user access token will be displayed.
//-----------------------------------------------------------------------------

// These packages allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/user/tokens';

var tokenID = '042a5ab9-3f36-4d6e-a7c8-fcdc901c7e2d';

var formData = new FormData();
formData.append('Description', 'Updated description');

var options = {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    },
    body: formData
};


fetch(`${baseUrl}/${tokenID}`, options)
    .then(response => response.json())
    .then(responseJson => {
        // Returns JSON object containing specified user access token.
        console.log(responseJson);
    })
    .catch(err => console.error(err));
