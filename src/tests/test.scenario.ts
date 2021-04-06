import { browser } from 'protractor'
import { SomePage } from '../page-objects/some.page'

const somePage = new SomePage()

describe('Some test suite', () => {
  beforeAll( async () => {
    // disable protractor waiting for angular load to allow tests to run against non angular websites
    await browser.waitForAngularEnabled(false)
  })

  it('should do first test case', async () => {
    await browser.get('https://www.google.com/')
    expect(1 === 1).toBe(true)
    // Some Test Code goes here
    // expect('Something On Page').toBe(true)
  })

  it('should do second test case', async () => {
    // ...
  })
  // Feel free to add more test cases below here
})
