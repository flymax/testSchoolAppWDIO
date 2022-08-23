

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get searchBar(){
        return $('input[aria-label="Search for a school"]');
    }

    get searchButton(){
        return $('button[id="searchPostcodeButton"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async searchSchools (searchText){
        await this.searchBar.setValue(searchText);
        await this.searchButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
