const HomePage = require('../pageobjects/home.page');
const newsPage = require('../pageobjects/news.page');
const ResultPage = require('../pageobjects/result.page');
const QaPage = require('../pageobjects/qa.page');

describe('Search schools application', () => {
    it('Search for a Contact Group school by address and check news on Nov2021', async () => {
        
        await HomePage.open();
        await HomePage.searchSchools('B16 8PE');
        //await expect(ResultPage.aciveContactGroup).toExist();
        await expect(ResultPage.aciveContactGroup).toBeDisplayed();
        await ResultPage.chooseActiveContactGroup();
        await expect(browser).toHaveUrl('https://osa-web.t-cg.co.uk/news')
        await expect(newsPage.newsItemNov21).toBeElementsArrayOfSize(1);
        await QaPage.open();
        await expect(browser).toHaveUrl('https://osa-web.t-cg.co.uk/qatest')
        await expect(newsPage.newsItemNov21).toBeElementsArrayOfSize(1);

    });
});


