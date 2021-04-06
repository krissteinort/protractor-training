import { by, element, $ } from 'protractor'

export class SomePage {
  myTestLocator1 = element(by.css('div.someClass'))
  myTestLocator2 = $('div.someClass')
  myTestLocator3 = element(by.cssContainingText('div.someClass', 'some text'))

  constructor() {}
}
