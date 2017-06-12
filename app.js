//Create five objects
//Find random number for the pertaining min and max average customers with their respective avg cookie purchase.
//push the math functions into an array then use for loop to print that array onto the page.
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikePlaceMkt = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  calcCustomersThisHour: function(min, max) {
    var numberCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(numberCustomersPerHour[i]);
    }
    return numberCustomersPerHour;
  },
  customersEachHour: [],
  calcCookiesThisHour: function() {
    var cookiesSoldPerHour = numberCustomersPerHour * avgCookiesPerCustomer;
    return cookiesSoldPerHour;
  },
  cookiesEachHour: [],
  render: function() {}
};

pikePlaceMkt.calcCustomersThisHour(23, 65);
console.log(pikePlaceMkt.customersEachHour);
