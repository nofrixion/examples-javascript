//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API Metadata/WhoAmI GET
// method. It provides a convenient way to check that a JWT access token is valid.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script using node.js or a browser
// 4. If successful a GUID, representing your user ID, will be displayed on 
//    the console.
//-----------------------------------------------------------------------------

// These packages allow the script to run on node.js, they are not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch('https://api-sandbox.nofrixion.com/api/v1/metadata/whoami', options)
    .then(response => response.text())
    // The UserID (in UUID form) should appear in console.
    .then(response => console.log(response))
    .catch(err => console.error(err));