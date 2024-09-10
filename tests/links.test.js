const { checkFile } = require('img-link-checker');

(async () => {
    const brokenLinks = await checkFile(
        './README.md',
        /* eslint-disable max-len */
        [
            'https://twitter.com/mpjme',
            'https://codepen.io/',
            'https://stackoverflow.com/questions/19389131/how-to-do-multiple-user-logins-with-different-inputs-in-jmeter',
            'https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial'
        ]
        /* eslint-enable max-len */
    );

    // Print a list of broken links and exit the process (will mark the CI/CD build as failed)
    if (brokenLinks.length > 0) {
        console.error('Broken links list:', brokenLinks);
        process.exit(1);
    }
})();
