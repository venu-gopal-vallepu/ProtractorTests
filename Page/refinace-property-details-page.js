var refinancePropertyDetails = function () {

    this.selectRefinancePurpose = function () {
        element(by.css("ion-select[name='refiPurposeType']")).click();
        browser.driver.sleep(1000);
        element(by.xpath("//div[contains(text(),'No Cash Out')]")).click();
    },
        this.addOutstandingLoan = function () {
            element(by.xpath("//ion-icon[@name='md-add']/../..")).click();
        },
        this.selectLoanType = function () {
            element(by.css('ion-select[name="mortgageType"]')).click();
            browser.driver.sleep(1000);
            element(by.xpath("//div[contains(text(),'Conventional Mortgage')]")).click();
        },
        this.enterCurrentBalance = function (value) {
            element(by.css('input[name="balanceAmount"]')).sendKeys(value);
        },
        this.enterInterestRate = function (value) {
            element(by.css('input[name="interestRate"]')).clear();
            element(by.css('input[name="interestRate"]')).sendKeys(value);
        },
        this.selectPayOfLoan  = function(){
             element(by.xpath("//ion-segment-button[text()='Yes']")).click();
        },
        this.saveOutstandingLoan = function(){
             element(by.css('div.bl-content bl-detail-footer div.page-bar.save-continue')).click();
        }
        this.saveRefinanceInfo = function () {
        element(by.css('button.app-button.save-continue')).click();
    }
}

module.exports = new refinancePropertyDetails();