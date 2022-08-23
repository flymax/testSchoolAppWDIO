# testSchoolAppWDIO
Test repo for preinterview task

##Problem
The qatest area errors out due to an issue with CORS policy.
The server hosting the shared resource neesa to allow the domain (where the app is hosted)

##Steps to reproduce
1. Navigate to "https://osa-web.t-cg.co.uk"
2. Once page is loaded(with a search box), enter value "B16 8PE" and click oon search button.
3. app displays a list of results, choose(click) the item with the name "Contact group" which is active
4. The app navigates to 'News' page. verify that a news entry is available for Novenber 2021.
5. Enter url "https://osa-web.t-cg.co.uk/qatest" in browser addressbar(same session). Find that the page shows a message stating 
"QA testing area
This area should work the same as: /news but it currently fails. Investigate and find out what is failing. Write a test to cover the failure, which will pass once fixed." 
6. Enter browser devtools by pressing F12 key, once opened switch to console tab if not already selected.
We can find that the console has printed errors stating CORS blocked.



