// These packages allow the script to run on node.js, they are not required for browser use.
const fetch = require('cross-fetch');

const options = { method: 'GET', headers: { Accept: 'text/plain' } };

fetch('https://api-sandbox.nofrixion.com/api/v1/metadata/version', options)
    .then(response => response.text())
    //API version should appear in console
    .then(responseText => console.log(responseText))
    .catch(err => console.error(err));