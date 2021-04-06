Protractor Training
======

### Reference Material
Jasmine Testing Framework
* https://www.tutorialspoint.com/jasminejs/index.htm

Protractor Docs:
* https://protractor.angular.io/

CSS Selectors
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
* https://www.w3schools.com/cssref/css_selectors.asp

### Setup (Protractor + Typescript):
* Run `npm install` to install dependencies
* Run `npm run webdriver-update` to update webdriver to the latest
* Confirm that the tests will run by running `npm run test`

### User Journey Summary
After hearing about a coworker's new mechanical keyboard, you get interested in checking what a mechanical keyboard is. 
After learning about mechanical keyboards from 'https://mechanicalkeyboards.com/', you decide to buy one and add a model to your cart.
The user journey ends with you filling out the checkout form.

Steps:
* Open google.com
* Search for 'mechanical keyboards'
* Click the link to 'https://mechanicalkeyboards.com/'
* Navigate around the website learning about mechanical keyboards
* Navigate to the shopping section and add a mechanical keyboard to your cart
* View your cart
* Start checking out by filling out the check out form

#### Exercise 1:
* Complete the user journey without using the page object pattern and using static sleeps