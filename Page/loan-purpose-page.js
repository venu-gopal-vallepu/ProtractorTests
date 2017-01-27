//import { browser, element, by, ElementFinder } from 'protractor';
var LoanPurposePage = function () {

    this.purposevalue = function () {
        element(by.css('[value="Refinance"]')).click();
    }
    this.optInContact = function () {
        element(by.xpath("//ion-segment-button[text()='No']")).click();
    }
    this.saveAndContinueButton = function () {
        element(by.css('button.app-button.save-continue')).click();
    }
    this.getNextPage = function(){
        return require('../page/loan-propertytype-page.js');
    }
}
module.exports = new LoanPurposePage();