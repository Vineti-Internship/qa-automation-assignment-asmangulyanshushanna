const assert = require('assert');


    describe('Getting tablets in amazon', () =>{
         it('Finding those 15 whose price is less than 70', () => {
            browser.url("https://www.amazon.com/");
	    browser.setValue('#twotabsearchtextbox', "tablet");
            browser.element('.nav-input').click()
            browser.pause(5000);
            let counter = 0;
	        while(counter < 15){
          
                const prices = browser.elements(".sx-price-whole").getText();
                const tabletNames = browser.elements(".s-access-title").getText();
                for(let i = 0; i < prices.length && counter < 15; i++){
                    const price = parseInt(prices[i]);
                    if(price < 70){
                        console.log(tabletNames[i]);
                        ++counter;
                    }
                };
		if(counter === 15) {
		break };
                browser.element("#pagnNextString").click();
            }
          assert.equal(counter, 15);
       })
})

