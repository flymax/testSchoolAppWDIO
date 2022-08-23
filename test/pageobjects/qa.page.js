

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QaPage extends Page {
    /**
     * define selectors using getter methods
     */
    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('qatest');
    }
}

module.exports = new QaPage();
