const { checkFile } = require('img-link-checker');

checkFile(
    './README.md',
    [
        'https://twitter.com/mpjme',
        'https://codepen.io/',
        'https://stackoverflow.com/questions/19389131/how-to-do-multiple-user-logins-with-different-inputs-in-jmeter',
        'https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial'
    ]
);
