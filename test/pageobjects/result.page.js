

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    /*
    get flashAlert () {
        return $('#flash');
    }
    */

    get aciveContactGroup(){
        return $('//li[starts-with(@aria-label,"go to homepage") and h2[.="Contact Group"] and .//p[.="Active"]]');
    }

    async chooseActiveContactGroup(){
        await this.aciveContactGroup.click();
    }

}

module.exports = new ResultPage();
