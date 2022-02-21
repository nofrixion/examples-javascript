//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API user/tokens 
// POST method. It provides a convenient way to intiate the creation of a new  
// user access token.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the pre-token will be returned and the token approval URL will
//    displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/user/tokens';

// Example form data
const formData = new FormData();
formData.append('MerchantID', '6f80138d-870b-4b07-8bc4-a4fd33a0d30f');
formData.append('Description', 'API Created Token');

const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    },
    body: formData
};

fetch(baseUrl, options)
    .then(response => response.json())
    // The response body contains a JSON 'pre-token'. Redirect the user to the approveTokenUrl
    // where they will be asked to perform strong authentication and then redirected back
    // to the NoFrixion portal where their token and refresh token will be visible.
    .then(response => console.log(response))
    .catch(err => console.error(err));