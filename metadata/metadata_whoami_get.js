// these packages allow the script to run on node.js, they are not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch('https://api-sandbox.nofrixion.com/api/v1/metadata/whoami', options)
    .then(response => response.text())
    // The UserID (in UUID form) should appear in console.
    .then(response => console.log(response))
    .catch(err => console.error(err));