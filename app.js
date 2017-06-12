var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlaceMkt = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  calcCustomersThisHour: function(min, max) {
    for (var i = 0; i < hours.length; i++) {
      var numberCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersEachHour.push(numberCustomersPerHour);
      // console.log(numberCustomersPerHour);
    }
    return numberCustomersPerHour;
  },

  calcCookiesThisHour: function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      var totalCookieSales = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(totalCookieSales);
    }
  },

  render: function() {
    var listData = document.getElementById('lists');
    for (var x = 0; x < hours.length; x++) {
      console.log(x);
      var liEl = document.createElement('li');
      liEl.textContent = this.cookiesEachHour[x];
      listData.appendChild(liEl);
    }
  }
};

pikePlaceMkt.calcCustomersThisHour();
pikePlaceMkt.calcCookiesThisHour();
pikePlaceMkt.render();
console.log(pikePlaceMkt.customersEachHour);
console.log(pikePlaceMkt.cookiesEachHour);
