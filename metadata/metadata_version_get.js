//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API Metadata/Verion
// GET method. It provides a convenient way to check the current version of the API.
//
// Usage:
// 1. Run the script using node.js or a browser
// 2. If successful a JSON object with the current version information of the version will be
// displayed.
//-----------------------------------------------------------------------------

// These packages allow the script to run on node.js, they are not required for browser use.
const fetch = require('cross-fetch');

const options = { method: 'GET', headers: { Accept: 'application/json' } };

fetch('https://api-sandbox.nofrixion.com/api/v1/metadata/version', options)
    .then(response => response.json())
    // JSON object with API version details should appear in console
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));