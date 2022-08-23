

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewsPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get newsItemNov21(){
        return $$('//li[./*[.="November 2021"]]//li');
    }
    
}

module.exports = new NewsPage();
