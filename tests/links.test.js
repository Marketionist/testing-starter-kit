const { checkFile } = require('img-link-checker');

(async () => {
    const brokenLinks = await checkFile(
        './README.md',
        /* eslint-disable max-len */
        [
            'https://twitter.com/mpjme',
            'https://codepen.io/',
            'https://stackoverflow.com/questions/19389131/how-to-do-multiple-user-logins-with-different-inputs-in-jmeter',
            'https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial',
            'https://www.gnu.org/savannah-checkouts/gnu/grep/manual/grep.html',
            'https://www.gnu.org/software/gawk/manual/gawk.html',
            'http://blog.getpostman.com/2017/10/25/writing-tests-in-postman/',
            'https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-2-5-d71ad0221d2a',
            'https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-3-5-67e3565dd069',
            'https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-4-5-ae8aaaac58f7',
            'https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-6ac92c514750',
            'https://medium.com/mop-developers/testing-your-api-with-dredd-c02e6ca151f2',
            'https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347',
            'https://medium.com/@ehmicky/execa-9-release-d0d5daaa097f',
            'https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347',
            'https://medium.com/dailyjs/the-pitfalls-of-async-await-in-array-loops-cf9cf713bfeb',
            'https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557',
            'https://medium.com/hackernoon/on-r%C3%A9sum%C3%A9s-and-applying-to-jobs-4c8cfcc7bf26',
            'https://davidkcaudill.medium.com/maybe-getting-rid-of-your-qa-team-was-bad-actually-52c408bd048b',
            'http://www.qarevolution.com/one-key-metric-should-drive-quality-engineering/',
            'https://www.welcometothejungle.com/en/articles/job-interviews-how-to-spot-toxic-management'
        ]
        /* eslint-enable max-len */
    );

    // Print a list of broken links and exit the process (will mark the CI/CD build as failed)
    if (brokenLinks.length > 0) {
        console.error('Broken links list:', brokenLinks);
        process.exit(1);
    }
})();
