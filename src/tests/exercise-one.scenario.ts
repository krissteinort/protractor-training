import { browser, $, by, element, Key } from 'protractor'
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

  const selectDropdownbyNum = function ( element, optionNum ) {
    if (optionNum){
      var options = element.all(by.tagName('option'))   
        .then(function(options){
          options[optionNum].click()
        })
    }
  }

  const fillForm = async function (el, text) {
    await el.click()
    await el.clear();
    await el.sendKeys(text);
  }

  

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
  it('should be to search for mechanical keyboards', async () => {
    await $('input[title="Search"]').sendKeys('mechanical keyboards')
    await browser.sleep(250)
    await $('input[value="Google Search"]').click()
    await browser.sleep(500)
    expect(
      await $('a[href="https://mechanicalkeyboards.com/"]').isDisplayed()
    ).toEqual(true)
  })
  it('should be to navigate to mechanicalkeyboards.com', async () => {
    await $('a[href="https://mechanicalkeyboards.com/"]').click()
    await browser.sleep(2000)
    expect(
      await $('a[title="MK Shop"').isDisplayed()
    ).toEqual(true)
  })
  it('should hover over and display the shop menu', async () => {
    await browser.actions().mouseMove($('a[href="./shop/"]')).perform()
    await browser.sleep(3000)
    expect(
      await $('a[href="shop/index.php?l=product_list&c=1"]').isDisplayed()
    ).toEqual(true)
  })
  it('should navigate to the mechanical keyboard section', async () => {
    await $('a[href="shop/index.php?l=product_list&c=1"]').click()
    await browser.sleep(2000)
    expect(
      await $('.main-shop').isDisplayed()
    ).toEqual(true)
  })
  it('should go to the product detail screen', async () => {
    await $('a[title="Add To Cart"]').click()
    await browser.sleep(2000)
    expect(
      await $('a[title="Add To Cart"]').isDisplayed()
    ).toEqual(true)
   })
  it('selects options, increments quantity, and adds to cart', async () => {
    await $('select[name="option[920]"]').click()
    await browser.sleep(500)
    await selectDropdownbyNum($('select[name="option[920]"]'), 4)
    await browser.sleep(500)
    /*Paul, is there a better way to chain key actions here? */
    await $('input[name="product[quantity]"').sendKeys(Key.BACK_SPACE)
    await $('input[name="product[quantity]"').sendKeys('2')

    await browser.sleep(500)
    await $('a[title="Add To Cart"]').click()
    await browser.sleep(1000)
    expect(
      await $('.success').isDisplayed()
    ).toEqual(true)
  })
  it('goes to the checkout page', async () => {
    await $('.big_button').click()
    await browser.sleep(2000)
    expect(
      await $('button[type="submit"]').isDisplayed()
    ).toEqual(true)
  })
  it('fills out the form', async () => {
  /* how would I write this in a for loop? */
    await fillForm($('input[type="text"]'), 'beep boop')
    await browser.sleep(4000)
  })

})
