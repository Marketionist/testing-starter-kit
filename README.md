# testing-starter-kit

QA Engineers and Developers now have a wide variety of free open source tools for testing websites and portals, but it can be a challenging task to find them all and make informed decision on what and how to use.

This is a collection of free open source software testing tools with some links on how to use them.

The scope of this particular list is limited to things that QA Automation Engineers, Software Development Engineers in Test (SDET), Web Developers, etc. are likely to find useful.

You can help by sending Pull Requests to add more tools and links to "how to use" instructions. Once I have a good set of links in this README file, I'll look into a better layout for the information and links.

We love all the free things out there, but it would be good to keep it on topic. It's a bit of a grey line sometimes so this is a bit opinionated.

# Table of Contents

* [Code Editors and IDE](#code-editors-and-ide):
  - VS Code
  - Sublime Text
  - IntelliJ IDEA
  - CodePen
* [Automated Browser Testing (end-to-end)](#automated-browser-testing-end-to-end):
  - Selenium
  - RSpec
  - Protractor
  - Nightwatch
  - WebdriverIO
  - Puppeteer
  - TestCafe
  - Playwright
* [Unit Testing](#unit-testing):
  - Mocha
  - Chai
  - Jasmine
  - Karma
  - Jest
  - AVA
* [Load Testing](#load-testing):
  - JMeter
  - Tsung
  - Gatling
  - Artillery
  - k6
* [Security Testing](#security-testing)
* [API Testing](#api-testing):
  - cURL
  - Dredd
  - Postman
  - Pactum
* [Linting and Code Quality](#linting-and-code-quality):
  - ESLint
* [Version Control Systems (VCS)](#version-control-systems-vcs):
  - Git
* [Continuous Integration (CI / CD)](#continuous-integration-ci--cd):
  - Jenkins
  - Travis
  - Gitlab
* [Containerization Tools](#containerization-tools):
  - Docker
  - Kubernetes
* [Command Line Tools (CLI)](#command-line-tools-cli):
  - Grep
* [Bug Tracking and Task Management](#bug-tracking-and-task-management):
  - Redmine
  - Mantis
* [Node.js](#nodejs)
* [Leadership in QA](#leadership-in-qa)
* [Job Search](#job-search)

## Code Editors and IDE
* [VS Code](https://code.visualstudio.com/Download): initial release date: **April 29, 2015**, written in: **TypeScript, JavaScript, Cascading Style Sheets (CSS)**. Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets and code refactoring. Plugins and extensions for it can be written in JavaScript ([a lot of them](https://code.visualstudio.com/docs/editor/extension-gallery) are built and maintained by community).

* [Sublime Text](https://www.sublimetext.com/3): initial release date: **January 18, 2008**, written in: **C++, Python**. Sublime Text is a cross-platform source code editor. It natively supports many programming and markup languages. Plugins and extensions for it can be written in Python ([tons of them](https://packagecontrol.io/browse/popular) can be installed and used).

* [IntelliJ IDEA](https://www.jetbrains.com/idea/download/): initial release date: **January 2001**, written in: **Java**. IntelliJ IDEA is a Java integrated development environment for developing computer software. It is developed by JetBrains and is available as an Apache 2 Licensed community edition and in a proprietary commercial edition. Both can be used for commercial development.

* codepen.io: initial release date: **2012**. CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, creatively named "pens", and test them.

## Automated Browser Testing (end-to-end)
![Testing pyramid by CircleCI](https://circleci.com/blog/media/Testing_pyramid.jpg "Testing pyramid")
* [Selenium](https://github.com/SeleniumHQ/selenium): initial release date: **2004**, written in: **Java**. Selenium automates browsers. Primarily, it is for automating web applications for testing purposes, but is certainly not limited to just that. Selenium has the support of some of the largest browser vendors who have taken (or are taking) steps to make Selenium a native part of their browser. It is also the core technology in countless other browser automation tools, APIs and frameworks. Selenium has 2 incarnations:
  * [Selenium IDE](https://www.seleniumhq.org/projects/ide/): is more simple and fast way to create automated testing scripts by clicking and recording your actions with record-and-playback Firefox add-on. It is mostly used to create simple scripts to aid in automation-aided exploratory testing. It requires some knowledge of HTML.
  * [Selenium WebDriver](https://www.seleniumhq.org/projects/webdriver/): is more sophisticated and powerful tool to create robust, browser-based regression automation suites and tests. It requires some knowledge of programming languages - can be used [one of the following](https://github.com/SeleniumHQ/selenium#documentation): Java, JavaScript, Python, Ruby, C#.

* [RSpec](https://github.com/rspec/rspec#install): initial release date: **August 2005**, written in: **Ruby**. RSpec is a 'Domain Specific Language' testing tool written in Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in the production applications. It utilizes easy-to-read syntax (`describe`, `it`). Here is a [free, once-weekly e-mail](http://elementalselenium.com/) on how to use Selenium with RSpec (also see the [full archive of useful tips](http://elementalselenium.com/tips)).

* [Protractor](https://www.protractortest.org/#/tutorial): initial release date: **Jun 12, 2013**, written in: **JavaScript**. Protractor is an end-to-end test framework for Angular and AngularJS applications (can be used for non-Angular websites too). Protractor runs tests against your application running in a real browser, interacting with it as a user would.

* [Nightwatch]():

* [WebdriverIO](https://webdriver.io/docs/gettingstarted.html): initial release date: **May 17, 2012**, written in: **JavaScript**. WebdriverIO is a test automation framework that allows you to run tests based on the Webdriver protocol and Appium automation technology. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs, BrowserStack or TestingBot.

  Useful links:
  * [Building Scalable And Stable e2e Test Suites With WebdriverIO](https://www.youtube.com/watch?v=FHxXMeDh7Co).
  * [A Tour Through the Newly Architected WebdriverIO Home](https://www.youtube.com/watch?v=1x8eUCBg_wk).
  * [Front-end Testing with Kevin](https://www.youtube.com/user/medigerati/videos?flow=grid&sort=p&view=0) - a collection of WebdriverIO tutorial videos.
  * [A look at the browser.execute command](https://www.youtube.com/watch?v=GpXKmVL17Tc).

* [Puppeteer](https://pptr.dev/): initial release date: **August 16, 2017**, written in: **JavaScript**. Puppeteer is a Node.js library maintained by Chrome's development team from Google. Puppeteer provides a high-level API to control Chrome or Chromium (by default headless, but can be [configured to run full non-headless](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) Chrome or Chromium) or interact with the DevTools protocol.

  Useful links:
  * [Web Scraping with a Headless Browser: A Puppeteer Tutorial](https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial).
  * [Getting to Know Puppeteer Using Practical Examples](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/).
  * [Puppeteer keyboard keys to use in `keyboard.type`](https://github.com/puppeteer/puppeteer/blob/main/src/common/USKeyboardLayout.ts).
  * [Puppeteer Snippets extension for VS Code](https://marketplace.visualstudio.com/items?itemName=nitayneeman.puppeteer-snippets).
  * [The Power of Headless Chrome and Automation Using Puppeteer](https://engineering.opensooq.com/the-power-of-headless-chrome-and-pwa-automation-using-puppeteer/).

* [TestCafe](https://devexpress.github.io/testcafe/documentation/getting-started/): initial release date: **October 17, 2016**, written in: **JavaScript**. TestCafe is Node.js tool to automate end-to-end web testing. TestCafe runs on Windows, MacOS, Linux and supports desktop, mobile, remote and cloud browsers (UI or headless).

  Useful links:
  * [Why TestCafe is better than Selenium](https://testcafe.io/documentation/402631/why-testcafe).
  * [Injecting cookies in your TestCafe automation](https://azevedorafaela.com/2019/07/24/inject-cookies-in-your-testcafe-automation/).
  * [Integrating TestCafe With TestRail](https://www.agiletestware.com/blog/?p=62).

* [Playwright](https://playwright.dev/docs/intro): initial release date: **31 January, 2020**, written in: **JavaScript**. Playwright is a framework for Web
Testing and Automation. It allows testing Chromium, Firefox and WebKit with a
single API. Playwright is built to enable cross-browser web automation that is
ever-green, capable, reliable and fast.


Useful links:
* [The Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) which have a high probability of causing issues when used as user-input data.

## Unit Testing
* [Mocha]():

* [Chai]():

* [Jasmine](https://github.com/jasmine/jasmine#installation): initial release date: **September 14, 2010**, written in: **JavaScript**. Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests with easy-to-read syntax (`describe`, `it`). It has built in assertion library and can be used as a testing framework both for unit tests and end-to-end tests.

* [Karma](https://www.npmjs.com/package/karma): initial release date: **March 11, 2012**, written in: **JavaScript**. A simple tool that allows you to execute JavaScript code in multiple real browsers. Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like. There are already plugins for most of the common testing frameworks: Jasmine, Mocha and [many others](https://www.npmjs.com/search?q=keywords:karma-adapter).

* [Jest](https://jestjs.io/docs/getting-started): initial release date: **April, 2016**, written in: **JavaScript**. Jest is a delightful JavaScript Testing
Framework with a focus on simplicity. It was developed by Facebook.

  Useful links:
  * [The only 3 steps you need to mock an API call in Jest](https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb).

* [AVA](https://github.com/avajs/ava): initial release date: **April 14, 2018**, written in: **JavaScript**. AVA is a test runner for Node.js with a concise API, detailed error output, embrace of new language features and process isolation that let you write tests more effectively.

Useful links:
* [Node.js & JavaScript Unit Testing Best Practices](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347).
* [How to test software: mocking, stubbing, and contract testing](https://circleci.com/blog/how-to-test-software-part-i-mocking-stubbing-and-contract-testing/).
* [Unit testing Node.js applications using Mocha, Chai, and Sinon](https://blog.logrocket.com/unit-testing-node-js-applications-using-mocha-chai-and-sinon/).
* [Node Testing Essentials (A node developer's guide to testing)](https://dev.to/ielgohary/node-testing-essentials-a-node-developer-s-guide-to-testing-m16).

## Load Testing
* [JMeter](https://jmeter.apache.org/download_jmeter.cgi): initial release date: **December 15, 1998**, written in: **Java**. Apache JMeter is a load testing tool for analyzing and measuring the performance of a variety of services, with a focus on web applications.

  Useful links:
  * [JMeter Tutorials - set of short YouTube videos](https://www.youtube.com/user/JMeterTutorial/videos?view=0&sort=da&flow=grid).
  * Load Testing with JMeter: Part 1 - [Getting Started](https://lincolnloop.com/blog/2011/sep/21/load-testing-jmeter-part-1-getting-started/), Part 2 - [Headless Testing and Jenkins Integration](https://lincolnloop.com/blog/2011/oct/12/load-testing-jmeter-part-2-headless-testing-and-je/), Part 3 - [Replaying Apache Logs](https://lincolnloop.com/blog/2012/sep/19/load-testing-jmeter-part-3-replaying-apache-logs/).
  * [Introduction to Apache JMeter Performance Testing](https://loadfocus.com/blog/2013/07/09/apache-jmeter-performance-test-introduction/).
  * [How to do multiple user logins with different inputs in JMeter](https://stackoverflow.com/questions/19389131/how-to-do-multiple-user-logins-with-different-inputs-in-jmeter).

* [Tsung](http://tsung.erlang-projects.org/user_manual/installation.html): initial release date: **May 29, 2006**, written in: **Erlang**. Tsung is an open-source multi-protocol distributed load testing tool. It can currently stress test HTTP, WebDAV, LDAP, MySQL, PostgreSQL, SOAP and XMPP servers. Tsung can simulate hundreds of simultaneous users on a single system. It can also function in a clustered environment.

  Useful links:
  * [Building a Load Test with Tsung for a Login and Post Session with dynamic url-encoded variables](https://www.innoq.com/en/blog/building-a-load-test-with-tsung/).

* [Gatling]():

* [Artillery](https://artillery.io/docs/guides/getting-started/installing-artillery.html): initial release date: **November 17, 2015**, written in: **JavaScript**. Artillery is a modern, powerful, easy-to-use load-testing toolkit. Artillery has a strong focus on developer happiness & ease of use, and a batteries-included philosophy. Our goal is to help developers build faster, more resilient and more scalable applications.

* [k6](https://k6.io/docs/get-started/installation/): initial release date: **January 18, 2017**, written in: **Go**, but scripts are written in JavaScript (see the [running k6 guide](https://k6.io/docs/get-started/running-k6/)). k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible. Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier. k6 will help you to build resilient and performant applications that scale.

## Security Testing
  Useful links:
  * [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/).
  * [Node Security: Fixing OWASP Top 10](https://nodegoat.herokuapp.com/tutorial).

## API Testing
* [cURL](https://curl.haxx.se/download.html): initial release date: **1997**, written in: **C**. The name stands for "Client URL". cURL is providing a library and command-line toolfor transferring data using various protocols. Installing and using cURL on Mac OS:
  * `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * `brew install curl`
  * `curl http://localhost:3000 # Server will receive a GET HTTP request`
  * `curl -X POST http://localhost:3000 # Server will receive a POST HTTP request`
  * `curl -X PUT http://localhost:3000 # Server will receive a PUT HTTP request`
  * `curl -X DELETE http://localhost:3000 # Server will receive a DELETE HTTP request`

* [Postman](https://www.getpostman.com/apps): initial release date: **February 19, 2016**, written in: **JavaScript**. Postman is a powerful API testing suite which has become a must-have tool for many developers. It has the ability to make various types of HTTP requests, i.e. GET, POST, PUT, PATCH. It is available for Windows, macOS, and Linux. To query an API endpoint, you’ll need to do the following steps:

  1. Enter the URL that you want to query in the URL bar in the top section.
  2. Select the HTTP method on the left of the URL bar to send the request.
  3. Click on the "Send" button - Postman will then send the request to the application, retrieve any responses and display it in the lower window.

Also Postman has a CLI collection runner - [Newman](https://github.com/postmanlabs/newman). It allows you to effortlessly run and test a Postman collection
directly from the command line.

  Useful links:
  * [The Basics of Using Postman for API Testing](https://www.youtube.com/watch?v=t5n07Ybz7yI).
  * [Writing tests in Postman](http://blog.getpostman.com/2017/10/25/writing-tests-in-postman/).
  * [16 Postman assertions](http://thethinkingtester.blogspot.com/2019/07/one-request-sixteen-assertions.html).
  * [Part 1: How to re-use code](https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-2-5-d71ad0221d2a).
  * [Part 2: Customizing Execution Order](https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-3-5-67e3565dd069).
  * [Part 3: Single collection pattern](https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-4-5-ae8aaaac58f7).
  * [Part 4: Easy assertions](https://medium.com/@dmitriev.victor/creating-postman-tests-that-scale-6ac92c514750).

* [Dredd](https://dredd.org/en/latest/installation.html): initial release date: **October 25, 2013**, written in: **JavaScript**. Dredd is a language-agnostic command-line tool for validating API description document against backend implementation of the API. Dredd reads your API description and step by step validates whether your API implementation replies with responses as they are described in the documentation.

  Useful links:
  * [Testing your API with Dredd](https://medium.com/mop-developers/testing-your-api-with-dredd-c02e6ca151f2)

## Linting and Code Quality
* [ESLint](https://eslint.org/): initial release date: **June 30, 2013**, written in: **JavaScript**. ESLint a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

  Useful links:
  * [JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions).
  * [Why npm lockfiles can be a security blindspot for injecting malicious modules](https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/).

## Version Control Systems (VCS)
* [Git](https://git-scm.com/downloads): initial release date: **April 7, 2005**, written in: **C, Perl, Tcl, Python**. Git is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source-code management in software development, but it can be used to keep track of changes in any set of files.

  Useful links:
  * [Git workflow guidelines](https://github.com/elsewhencode/project-guidelines) with easy and clear instructions on "What to do" and explanations on "Why to do it this way".
  * [Removing sensitive data from a repository](https://help.github.com/articles/removing-sensitive-data-from-a-repository/).
  * Markdown is a lightweight markup language used all over Github for documentation and instructions (for example `README.md` files). Here is a good [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Continuous Integration (CI / CD)
* [Jenkins](https://jenkins.io/download/): initial release date: **February 2, 2011**, written in: **Java**. Jenkins is commonly used for: building projects, running tests to detect bugs and other issues as soon as they are introduced, static code analysis, deployment, execute repetitive tasks, save time, and optimize your development process. It usually has to be installed on your servers / machines.

* [Travis](https://docs.travis-ci.com/user/tutorial/): initial release date: **November, 2010**, written in: **Ruby**. Travis is famous for: quick setup (just add `.travis.yml` configuration file, login with Github, tell Travis CI to test a project and then push to Github), live build views, pull request support, pre-installed database services, auto deployments on passing builds, clean VMs for every build, etc. With Travis CI testing your open source projects will always be free! It does not need to be installed on your servers / machines, it just needs to be enabled for your Github repository.

* [Gitlab](https://about.gitlab.com/install/): initial release date: **October, 2011**, written in: **Ruby, Go, JavaScript**. GitLab is a web-based Git-repository manager providing wiki, issue-tracking and CI/CD pipeline features. It usually has to be installed on your servers / machines.

Useful links:
* [Github Actions](https://blog.testdouble.com/posts/2019-11-21-first-look-at-github-actions/).

## Containerization Tools
* [Docker](https://hub.docker.com/search/?type=edition&offering=community):  initial release date: **December 21, 2013**, written in: **Go**. Docker is essentially, an isolated environment for your code to run in.

  Useful links:
  * [A Practical Introduction to Container Terminology](https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction).
  * [A Better Way to Develop Node.js with Docker](https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093).
  * [Docker 101 workshop - introduction to Docker and basic concepts](https://github.com/gravitational/workshop/blob/master/docker.md).
  * [Top 4 Tactics To Keep Node.js Rockin’ in Docker](https://blog.docker.com/2019/07/keep-nodejs-rockin-in-docker/).

* [Kubernetes](https://kubernetes.io/docs/setup/): initial release date: **7 June, 2014**, written in: **Go**. Kubernetes (k8s) is an open-source system for automating deployment, scaling, and management of containerized applications. A container orchestrator like Kubernetes usually does two things:
  - Dynamically schedules container workloads within a cluster of computers. This is often referred to as distributed computing.
  - Provides a standardized application definition file (kube yaml, docker compose, etc.)

  Useful links:
  * [Kubernetes Production Patterns and Anti-Patterns](https://github.com/gravitational/workshop/blob/master/k8sprod.md)

## Command Line Tools (CLI)
* [Grep](https://www.gnu.org/savannah-checkouts/gnu/grep/manual/grep.html): initial release date: **November, 1974**, written in: **PDP-11 assembly**. Grep is a command-line utility for searching plain-text data sets for lines that match a regular expression. Its name comes from g/re/p (globally search a regular expression and print), which has the same effect: doing a global search with the regular expression and printing all matching lines.

  Useful links:
  * [Manipulating text at the command line with grep](https://www.redhat.com/sysadmin/manipulating-text-grep).

* [AWK](https://www.gnu.org/software/gawk/manual/gawk.html): initial release date: **1977**, written in: **C**. AWK is a scripting language used for manipulating data and generating reports.The awk command programming language requires no compiling, and allows the user to use variables, numeric functions, string functions, and logical operators.

## Bug Tracking and Task Management
* [Redmine](http://www.redmine.org/projects/redmine/wiki/Download): initial release date: **June 25, 2006**, written in: **Ruby**. Redmine is a free and open source, web-based project management and issue tracking tool. It allows users to manage multiple projects and associated subprojects. It features per project wikis and forums, time tracking, and flexible, role-based access control.

* [Mantis](https://www.mantisbt.org/download.php): initial release date: **Nov 6, 2008**, written in: **PHP**. Mantis Bug Tracker is a free and open source, web-based bug tracking system. The most common use of MantisBT is to track software defects. However, MantisBT is often configured by users to serve as a more generic issue tracking system and project management tool.

Useful links:
* [Scrum, Kanban, and ScrumBan: What’s the Difference?](https://blog.gurock.com/scrum-kanban-scrumban/).

## Node.js
  Useful links:
  * [Node.js & JavaScript Testing Best Practices](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347).
  * [Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4) - nice 90 minute video on starting with Node.js.
  * [Cheatsheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/backend/node.js) on main Node.js functions and processes.
  * [Practical Node.js](https://github.com/azat-co/practicalnode) - open source book.
  * [The Node.js Handbook](https://nodehandbook.com/) - free book (can be downloaded in PDF / ePub / Mobi).
  * [How to use Docker for Node.js development](https://cravencode.com/post/docker/nodejs-local-development/).
  * [Differences between iterating over an array with the 4 primary looping constructs in JavaScript](http://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript.html).
  * [The Pitfalls of Async/Await in Array Loops](https://medium.com/dailyjs/the-pitfalls-of-async-await-in-array-loops-cf9cf713bfeb).
  * [Guide to JSON.stringify in JavaScript](http://thecodebarbarian.com/the-80-20-guide-to-json-stringify-in-javascript.html).
  * Very expressive videos about Functional Programming in JavaScript by Mattias Petter Johansson [Twitter](https://twitter.com/mpjme) | [Youtube](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q):
    - Part 1: [Higher-order functions](https://www.youtube.com/watch?v=BMUiFMZr7vk);
    - Part 2: [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ);
    - Part 3: [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c);
    - Part 4: [Reduce Advanced](https://www.youtube.com/watch?v=1DMolJ2FrNY);
    - Part 5: [Closures](https://www.youtube.com/watch?v=CQqwU2Ixu-U);
    - Part 6: [Currying](https://www.youtube.com/watch?v=iZLP4qOwY8I);
    - Part 7: [Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4);
    - Part 8: [Promises](https://www.youtube.com/watch?v=2d7s3spWAzo);
    - [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA);
    - [Factory Functions in JavaScript](https://www.youtube.com/watch?v=ImwrezYhw4w).
  * [When Not to Use Lock Files with Node.js](https://www.twilio.com/blog/lockfiles-nodejs).
  * [7 Methods for Working with Directories in Node.js](https://coderrocketfuel.com/article/7-methods-for-working-with-directories-in-node-js).
  * [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js).
  * How to access Google Spreadsheets with Node.js: [article 1](https://blog.stephsmith.io/tutorial-google-sheets-api-node-js/), [article 2](https://cmichel.io/how-to-access-google-spreadsheet-with-node/).
  * [A Guide to Node.js logging](https://www.twilio.com/blog/guide-node-js-logging).
  * [Understanding npm link](https://fhinkel.rocks/2018/10/25/Understanding-npm-link/).
  * [Monorepos and npm](https://blog.npmjs.org/post/186494959890/monorepos-and-npm).
  * [JavaScript modules](https://v8.dev/features/modules).
  * [Types of test unreliability](https://www.youtube.com/watch?v=TKDMya4bznw) - informative 30 min video with code examples by Rich Trott.
  * [Running Python scripts from Node.js](https://thecodinginterface.com/blog/bridging-nodejs-and-python-with-pynode/).
  * [JavaScript Visualized: the JavaScript Engine](https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf).
  * [Object.assign vs Object Spread in Node.js](http://thecodebarbarian.com/object-assign-vs-object-spread.html).
  * [How To Write Shell Scripts in Node with Google’s zx Library](https://www.sitepoint.com/google-zx-write-node-shell-scripts/).
  * [The Death of a Node.js Process](https://thomashunter.name/posts/2021-03-08-the-death-of-a-nodejs-process).

## Leadership in QA
Useful links:
  * [The impact of your conversation style on your team](https://mysoftwarequality.wordpress.com/2019/07/22/leaders-do-you-understand-the-impact-of-your-conversation-style-on-your-team/).
  * [One key metric should drive quality engineering](http://www.qarevolution.com/one-key-metric-should-drive-quality-engineering/).
  * [What you should really measure in your annual performance reviews (and why)](https://www.atlassian.com/blog/hr-teams/our-performance-reviews-framework).
  * [How to Make Good Code Reviews Better](https://stackoverflow.blog/2019/09/30/how-to-make-good-code-reviews-better/).
  * [Emotional intelligence: 7 essential tips for leaders](https://enterprisersproject.com/article/2019/12/emotional-intelligence-7-tips).
  * [IT burnout](https://www.redhat.com/sysadmin/it-burnout).
  * [Job interviews: how to spot toxic management](https://www.welcometothejungle.com/en/articles/job-interviews-how-to-spot-toxic-management).
  * [The Joys of Managing Engineering Teams by Maryam Umar](https://www.youtube.com/watch?v=64Mzvjls8mU).
  * [Being successfull as a team glue](https://www.slideshare.net/TanyaReilly/being-glue).
  * [An Introvert's Guide to being a Mentor - with a plan](https://dev.to/geekgalgroks/an-introvert-s-guide-to-being-a-mentor-39nh).
  * [How to Mentor Someone Who Doesn’t Know What Their Career Goals Should Be](https://hbr.org/2018/07/how-to-mentor-someone-who-doesnt-know-what-their-career-goals-should-be?autocomplete=true).
 * [How to be a sponsor when you're a developer](https://larahogan.me/blog/how-be-sponsor-when-youre-developer).
 * [Getting mentors](https://chelseatroy.com/2019/03/21/leveling-up-skill-19-getting-mentors/).
 * [Difference between mentorship and sponsorship](https://chelseatroy.com/2019/04/02/leveling-up-20th-post-corollary-mentors-and-sponsors/).

## Job Search
  * [Tips on writing good resumes](https://medium.com/hackernoon/on-r%C3%A9sum%C3%A9s-and-applying-to-jobs-4c8cfcc7bf26).
  * [How to advance your career by contributing to open source projects](https://opensource.com/article/19/5/how-get-job-doing-open-source).
  * [A curated list of established remote/distributed/virtual tech companies](https://github.com/yanirs/established-remote).

# Thanks
If this list of free open source software testing tools and links was helpful to
you, please give it a **★ Star**
on [GitHub](https://github.com/Marketionist/testing-starter-kit).
