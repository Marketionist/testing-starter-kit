# testing-starter-kit

QA Engineers and Developers now have a wide variety of free open source tools for testing websites and portals, but it can be a challenging task to find them all and make informed decision on what and how to use.

This is a collection of free open source software testing tools with some links on how to use them.

The scope of this particular list is limited to things that QA Automation Engineers, Software Development Engineers in Test (SDET), Web Developers, etc. are likely to find useful.

You can help by sending Pull Requests to add more tools and links to "how to use" instructions. Once I have a good set of links in this README file, I'll look into a better layout for the information and links.

We love all the free things out there, but it would be good to keep it on topic. It's a bit of a grey line sometimes so this is a bit opinionated - please do not be offended if I do not accept your contribution.

# Table of Contents

* [Code Editors and IDE](#code-editors-and-ide)
* [Automated Browser Testing (end-to-end)](#automated-browser-testing-end-to-end)
* [Unit Testing](#unit-testing)
* [Load Testing](#load-testing)
* [Security Testing](#security-testing)
* [API Testing](#api-testing)
* [Linting and Code Quality](#linting-code-quality)
* [Version control systems (VCS)](#version-control-systems)
* [Continuous Integration (CI / CD)](#continuous-integration-ci-cd)
* [Containerization tools](#containerization-tools)
* [Bug Tracking and Task Management](#bug-tracking-task-management)

## Code Editors and IDE

* [VS Code](https://code.visualstudio.com/Download): initial release date: **April 29, 2015**, written in: **TypeScript, JavaScript, Cascading Style Sheets (CSS)**. Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets and code refactoring. Plugins and extensions for it can be written in JavaScript ([a lot of them](https://code.visualstudio.com/docs/editor/extension-gallery) are built and maintained by community).

* [Sublime Text](https://www.sublimetext.com/3): initial release date: **January 18, 2008**, written in: **C++, Python**. Sublime Text is a cross-platform source code editor. It natively supports many programming and markup languages. Plugins and extensions for it can be written in Python ([tons of them](https://packagecontrol.io/browse/popular) can be installed and used).

* [IntelliJ IDEA](https://www.jetbrains.com/idea/download/): initial release date: **January 2001**, written in: **Java**. IntelliJ IDEA is a Java integrated development environment for developing computer software. It is developed by JetBrains and is available as an Apache 2 Licensed community edition and in a proprietary commercial edition. Both can be used for commercial development.

* [CodePen](https://codepen.io/): initial release date: **2012**. CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, creatively named "pens", and test them.

## Automated Browser Testing (end-to-end)
* [Selenium](https://github.com/SeleniumHQ/selenium): initial release date: **July 2012**, written in: **Java**. Selenium automates browsers. Primarily, it is for automating web applications for testing purposes, but is certainly not limited to just that. Selenium has the support of some of the largest browser vendors who have taken (or are taking) steps to make Selenium a native part of their browser. It is also the core technology in countless other browser automation tools, APIs and frameworks. Selenium has 2 incarnations:
  * [Selenium IDE](https://www.seleniumhq.org/projects/ide/): is more simple and fast way to create automated testing scripts by clicking and recording your actions with record-and-playback Firefox add-on. It is mostly used to create simple scripts to aid in automation-aided exploratory testing. It requires some knowledge of HTML.
  * [Selenium WebDriver](https://www.seleniumhq.org/projects/webdriver/): is more sophisticated and powerful tool to create robust, browser-based regression automation suites and tests. It requires some knowledge of programming languages - can be used [one of the following](https://github.com/SeleniumHQ/selenium#documentation): Java, JavaScript, Python, Ruby, C#.

* [Protractor]():

* [WebdriverIO]():

* [Nightwatch]():

* [RSpec](https://github.com/rspec/rspec#install): initial release date: **August 2005**, written in: **Ruby**. RSpec is a 'Domain Specific Language' testing tool written in Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in the production applications. It utilizes easy-to-read syntax (`describe`, `it`). Here is a (free, once-weekly e-mail)[http://elementalselenium.com/] on how to use Selenium with RSpec (also see the (full archive of useful tips)[http://elementalselenium.com/tips]).

## Unit Testing
* [Jasmine](https://github.com/jasmine/jasmine#installation): initial release date: **September 14, 2010**, written in: **JavaScript**. Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests with easy-to-read syntax (`describe`, `it`). It has built in assertion library and can be used as a testing framework both for unit tests and end-to-end tests.

* [Karma](https://www.npmjs.com/package/karma): initial release date: **March 11, 2012**, written in: **JavaScript**. A simple tool that allows you to execute JavaScript code in multiple real browsers. Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like. There are already plugins for most of the common testing frameworks: Jasmine, Mocha and [many others](https://www.npmjs.com/search?q=keywords:karma-adapter).

* [Jest]():

* [Mocha]():

* [Chai]():

* [AVA](https://github.com/avajs/ava): initial release date: **April 14, 2018**, written in: **JavaScript**. AVA is a test runner for Node.js with a concise API, detailed error output, embrace of new language features and process isolation that let you write tests more effectively.

  Useful links:
  * [Node.js & JavaScript Unit Testing Best Practices](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347).

## Load Testing
* [Jmeter](https://jmeter.apache.org/download_jmeter.cgi): initial release date: **December 15, 1998**, written in: **Java**. Apache JMeter is a load testing tool for analyzing and measuring the performance of a variety of services, with a focus on web applications.

  Useful links:
  * [JMeter Tutorials - set of short YouTube videos](https://www.youtube.com/user/JMeterTutorial/videos?view=0&sort=da&flow=grid).
  * Load Testing with JMeter: [Part 1 - Getting Started](https://lincolnloop.com/blog/2011/sep/21/load-testing-jmeter-part-1-getting-started/), [Part 2 - Headless Testing and Jenkins Integration](https://lincolnloop.com/blog/2011/oct/12/load-testing-jmeter-part-2-headless-testing-and-je/), [Part 3 - Replaying Apache Logs](https://lincolnloop.com/blog/2012/sep/19/load-testing-jmeter-part-3-replaying-apache-logs/).
  * [Introduction to Apache JMeter Performance Testing](https://loadfocus.com/blog/2013/07/09/apache-jmeter-performance-test-introduction/).
  * [How to do multiple user logins with different inputs in JMeter](https://stackoverflow.com/questions/19389131/how-to-do-multiple-user-logins-with-different-inputs-in-jmeter).

* [Gatling]():

* [Tsung]():

## Security Testing

  Useful links:
  * [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/).

## API Testing
* [Postman](https://www.getpostman.com/apps): initial release date: **February 19, 2016**, written in: **JavaScript**. Postman is a powerful API testing suite which has become a must-have tool for many developers.

  Useful links:
  * [The Basics of Using Postman for API Testing](https://www.youtube.com/watch?v=t5n07Ybz7yI).
  * [Writing tests in Postman](http://blog.getpostman.com/2017/10/25/writing-tests-in-postman/).

* [cURL](https://curl.haxx.se/download.html): initial release date: **1997**, written in:**C**. The name stands for "Client URL". cURL is providing a library and command-line toolfor transferring data using various protocols. Installing and using cURL on Mac OS:
  * `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * `brew install curl`
  * ```
  curl http://localhost:3000
  # -> Server will receive a GET HTTP request

  curl -X POST http://localhost:3000
  # -> Server will receive a POST HTTP request

  curl -X PUT http://localhost:3000
  # -> Server will receive a PUT HTTP request

  curl -X DELETE http://localhost:3000
  # -> Server will receive a DELETE HTTP request
  ```

* [Dredd](https://dredd.org/en/latest/installation.html): initial release date: **October 25, 2013**, written in: **JavaScript**. Dredd is a language-agnostic command-line tool for validating API description document against backend implementation of the API. Dredd reads your API description and step by step validates whether your API implementation replies with responses as they are described in the documentation.
  Useful links:
  * [Teting your API with Dredd](https://medium.com/mop-developers/testing-your-api-with-dredd-c02e6ca151f2)

## Linting and Code Quality
* [ESLint](https://eslint.org/): initial release date: **June 30, 2013**, written in: **JavaScript**. ESLint a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## Version control systems (VCS)
* [Git](https://git-scm.com/downloads): initial release date: **April 7, 2005**, written in: **C, Perl, Tcl, Python**. Git is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source-code management in software development, but it can be used to keep track of changes in any set of files.

  Useful links:
  * [Git workflow guidelines](https://github.com/elsewhencode/project-guidelines) with easy and clear instructions on "What to do" and explanations on "Why to do it this way".
  * [Removing sensitive data from a repository](https://help.github.com/articles/removing-sensitive-data-from-a-repository/).
  * Markdown is a lightweight markup language used all over Github for documentation and instructions (for example `README.md` files). Here is a good [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Continuous Integration (CI / CD)
* [Jenkins](https://jenkins.io/download/): initial release date: **February 2, 2011**, written in: **Java**. Jenkins is commonly used for: building projects, running tests to detect bugs and other issues as soon as they are introduced, static code analysis, deployment, execute repetitive tasks, save time, and optimize your development process. It usually has to be installed on your servers / machines.

* [Travis](https://docs.travis-ci.com/user/tutorial/): initial release date: **November, 2010**, written in: **Ruby**. Travis is famous for: quick setup (just add `.travis.yml` configuration file, login with Github, tell Travis CI to test a project and then push to Github), live build views, pull request support, pre-installed database services, auto deployments on passing builds, clean VMs for every build, etc. With Travis CI testing your open source projects will always be free! It does not need to be installed on your servers / machines, it just needs to be enabled for your Github repository.

* [Gitlab](https://about.gitlab.com/install/): initial release date: **October, 2011**, written in: **Ruby on Rails, Go, JavaScript**. GitLab is a web-based Git-repository manager providing wiki, issue-tracking and CI/CD pipeline features. It usually has to be installed on your servers / machines.
