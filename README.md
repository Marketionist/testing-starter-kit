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

## Load Testing
* [Jmeter](https://jmeter.apache.org/download_jmeter.cgi): initial release date: **December 15, 1998**, written in: **Java**. Apache JMeter is a load testing tool for analyzing and measuring the performance of a variety of services, with a focus on web applications.

  Useful links:
  * [JMeter Tutorials - set of short YouTube videos](https://www.youtube.com/user/JMeterTutorial/videos?view=0&sort=da&flow=grid).
  * Load Testing with JMeter: [Part 1 - Getting Started](https://lincolnloop.com/blog/2011/sep/21/load-testing-jmeter-part-1-getting-started/), [Part 2 - Headless Testing and Jenkins Integration](https://lincolnloop.com/blog/2011/oct/12/load-testing-jmeter-part-2-headless-testing-and-je/), [Part 3 - Replaying Apache Logs](https://lincolnloop.com/blog/2012/sep/19/load-testing-jmeter-part-3-replaying-apache-logs/).
  * [Introduction to Apache JMeter Performance Testing](https://loadfocus.com/blog/2013/07/09/apache-jmeter-performance-test-introduction/).
  * [How to do multiple user logins with different inputs in JMeter](https://stackoverflow.com/questions/19389131/how-to-do-multiple-user-logins-with-different-inputs-in-jmeter).

* [Tsung]():

## Security Testing

## API Testing

## Linting and Code Quality
