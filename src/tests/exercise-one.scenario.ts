import { browser, $, by, element } from 'protractor'

describe('Exercise One', () => {
  // Jasmine Testing Framework
  // https://www.tutorialspoint.com/jasminejs/index.htm
  //
  //Protractor Docs:
  // https://protractor.angular.io/
  //
  // CSS Selectors
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
  // https://www.w3schools.com/cssref/css_selectors.asp
  //
  // Selector Examples:
  // element(by.css('div.someClass'))
  // $('div.someClass')
  // element(by.cssContainingText('div.someClass', 'some text'))

  beforeAll( async () => {
    // disable protractor waiting for angular load to allow tests to run against non angular websites
    await browser.waitForAngularEnabled(false)
  })

  it('should be about to open google', async () => {
    await browser.get('https://www.google.com/') // use await to wait for promises to resolve
    browser.sleep(250) // Use sleeps to wait for a element to be interactable

    expect(
      await $('input[title="Search"]').isDisplayed()
    ).toBe(true)

    expect(
      await element(by.css('input[title="Search"]')).isDisplayed()
    ).toEqual(true)
  })

  it('should do second test case', async () => {
    // ...
  })
  // Feel free to add more test cases below here
})
