const { checkFile } = require('img-link-checker');

checkFile('./README.md', ['https://twitter.com/mpjme', 'https://codepen.io/']);
