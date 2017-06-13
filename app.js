var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allLocations = [];

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
    }
    return numberCustomersPerHour;
  },

  calcCookiesThisHour: function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      var totalCookieSales = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(totalCookieSales);
    }
  },

  render: function() {
    var listData = document.getElementById('lists');
    for (var x = 0; x < hours.length; x++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[x] + ': ' + this.cookiesEachHour[x] + ' cookies';
      listData.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookie Sales: ' + pikePlaceMkt.cookiesEachHour.reduce(function(a, b) {
      return a + b;
    });
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
  }
};

pikePlaceMkt.calcCustomersThisHour();
pikePlaceMkt.calcCookiesThisHour();
pikePlaceMkt.render();
// console.log(pikePlaceMkt.customersEachHour);
// console.log(pikePlaceMkt.cookiesEachHour);

//**********Location 2
var seatacAirport = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
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
      var totalCookieSales = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(totalCookieSales);
    }
  },

  render: function() {
    var listData = document.getElementById('lists2');
    for (var x = 0; x < hours.length; x++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[x] + ': ' + this.cookiesEachHour[x] + ' cookies';
      listData.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookie Sales: ' + seatacAirport.cookiesEachHour.reduce(function(a, b) {
      return a + b;
    });
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
  }
};

seatacAirport.calcCustomersThisHour();
seatacAirport.calcCookiesThisHour();
seatacAirport.render();
// console.log(seatacAirport.customersEachHour);
// console.log(seatacAirport.cookiesEachHour);

//*************Location 3
var seattleCenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
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
      var totalCookieSales = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(totalCookieSales);
    }
  },

  render: function() {
    var listData = document.getElementById('lists3');
    for (var x = 0; x < hours.length; x++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[x] + ': ' + this.cookiesEachHour[x] + ' cookies';
      listData.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookie Sales: ' + seattleCenter.cookiesEachHour.reduce(function(a, b) {
      return a + b;
    });
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
  }
};

seattleCenter.calcCustomersThisHour();
seattleCenter.calcCookiesThisHour();
seattleCenter.render();
// console.log(seattleCenter.customersEachHour);
// console.log(seattleCenter.cookiesEachHour);

//**************Location 4
var capitolHill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  calcCustomersThisHour: function(min, max) {
    for (var i = 0; i < hours.length; i++) {
      var numberCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersEachHour.push(numberCustomersPerHour);
    }
    return numberCustomersPerHour;
  },

  calcCookiesThisHour: function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      var totalCookieSales = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(totalCookieSales);
    }
  },

  render: function() {
    var listData = document.getElementById('lists4');
    for (var x = 0; x < hours.length; x++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[x] + ': ' + this.cookiesEachHour[x] + ' cookies';
      listData.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookie Sales: ' + capitolHill.cookiesEachHour.reduce(function(a, b) {
      return a + b;
    });
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
  }
};

capitolHill.calcCustomersThisHour();
capitolHill.calcCookiesThisHour();
capitolHill.render();
// console.log(capitolHill.customersEachHour);
// console.log(capitolHill.cookiesEachHour);

//**********Location 5
var alki = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
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
      var totalCookieSales = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(totalCookieSales);
    }
  },

  render: function() {
    var listData = document.getElementById('lists5');
    for (var x = 0; x < hours.length; x++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[x] + ': ' + this.cookiesEachHour[x] + ' cookies';
      listData.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookie Sales: ' + alki.cookiesEachHour.reduce(function(a, b) {
      return a + b;
    });
    listData.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = '********************************';
    listData.appendChild(liEl);
  }
};

alki.calcCustomersThisHour();
alki.calcCookiesThisHour();
alki.render();
// console.log(alki.customersEachHour);
// console.log(alki.cookiesEachHour);
