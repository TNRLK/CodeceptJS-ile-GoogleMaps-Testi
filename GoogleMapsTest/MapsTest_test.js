Feature('MapsTest');

Scenario('test something', ({ I }) => {
I.amOnPage('http://google.com');
I.fillField('//input[@name="q"]','Google maps');
I.click('//input[@name="btnK"]');
I.click('//h3[@class="LC20lb MBeuO DKV0Md"][contains(text(),"Google Maps")]');
I.wait(3);
I.click('//div[@id="mylocation"]');
I.fillField('//input[@id="searchboxinput"]','Bafra öğretmen evi');
I.wait(3);
I.pressKey('Enter');
I.wait(2);
I.click('//button[@id="widget-zoom-in"]');
I.wait(1);
I.click('//button[@id="widget-zoom-in"]');
I.wait(1);
I.click('//button[@id="widget-zoom-in"]');
I.openNewTab();
I.amOnPage('https://www.google.com/maps/@41.5672486,35.9180185,3a,59.4y,350.72h,97.91t/data=!3m6!1e1!3m4!1sLpI0nEOOIBdcFrmW2mGpLw!2e0!7i16384!8i8192');
I.wait(3);
I.click('//button[@id="widget-zoom-in"]');
pause();
});
