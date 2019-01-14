// // jetblue protractor testing
// spec.js

describe('Jetblue Protractor Testing', function() {

    // variables go here
    // TODO try to find element by input text instead
    var inputFromAirport = element(by.id('city-selector_2gb29xyq5'));
    var inputToAirport = element(by.id('city-selector_3h0iiqdxe'));
    var inputDepartDate = element(by.id('date_zmy6mqosy'));
    var inputReturnDate = element(by.id('return-date_s9zgxhhxp'));
    // todo figure out how to find this damn button
    var buttonSearchFlights = element(by.buttonText('Search flights'));
    var dateJan21 = element(by.id('month_ezc1dqlosday21'));
    var dateJan22 = element(by.id('month_ezc1dqlosday22'));

    // examples ---------------
    // var goButton = element(by.id('gobutton'));
    // var operator = element(by.model('operator'));
    // var latestResult = element(by.binding('latest'));
    // var history = element.all(by.repeater('result in memory'));

  
    beforeEach(function() {
      browser.get('https://www.jetblue.com');
    });
  
    // = testcase
        // it('should authenticate the user', function() {
    //     element( by.model('username') ).sendKeys( params.login.user );
    //     element( by.model('password') ).sendKeys( params.login.password );
    //     element( by.css('[ng-click="login()"]') ).click();
    //     expect( element(by.binding('username') ).getText() ).toEqual( params.login.user );
    // });
  
    function inputAirports(fromAirport, toAirport) {
        inputFromAirport.sendKeys(fromAirport);
        inputToAirport.sendKeys(toAirport);
    }

    function inputDates(departDate, returnDate) {
        inputDepartDate.sendKeys();
        inputReturnDate.sendKeys();
    }

    // TODO fill in
    it ('should input airport codes', function() {
        
        inputAirports('SLC', 'MUN');

        expect(element(inputFromAirport).getText()).toEqual('SLC');
        expect(inputToAirport.getText()).toEqual('MUN');
    });

    it ('should input departure and return dates', function() {

        inputAirports('SLC', 'MUN');
        inputDates(dateJan21, dateJan22);

        expect(element(by.id('departure-date_zmy6mqosy')).getText()).toEqual('01/21/2019')
        expect(element(by.id('return-date_s9zgxhhxp')).getText()).toEqual('01/22/2019')

    });

    it ('should click search flights button', function () {

        inputAirports('SLC', 'MUN');
        inputDates(dateJan21, dateJan22);

        buttonSearchFlights.click();
    });
    
  });