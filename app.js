// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allLocations = [];
var theTable = document.getElementById('pike');

function CookieStore(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  allLocations.push(this);
}

CookieStore.prototype.calcCustomersThisHour = function() {
  var reference = [];
  for (var i = 0; i < hours.length; i++) {
    var numberCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    reference.push(numberCustomersPerHour);
  }
  this.customersEachHour = reference;
  return numberCustomersPerHour;
};

CookieStore.prototype.calcCookiesThisHour = function() {
  for (var j = 0; j < hours.length; j++) {
    var totalCookieSales = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(totalCookieSales);
  }
};
var renderHeader = function() {
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = '';
  trEL.appendChild(thEL);
  for (var i = 0; i < hours.length; i++) {
    var thEL = document.createElement('th');
    thEL.textContent = hours[i];
    trEL.appendChild(thEL);
  }
  theTable.appendChild(trEL);
};

CookieStore.prototype.render = function() {
  var trEL = document.createElement('tr');
  var tdEL = document.createElement('td');
  tdEL.textContent = this.locationName;
  trEL.appendChild(tdEL);

  for (var i = 0; i < hours.length; i++) {
    var tdEL = document.createElement('td');
    tdEL.textContent = this.cookiesEachHour[i];
    trEL.appendChild(tdEL);
  }
  theTable.appendChild(trEL);
};

var pikePlace = new CookieStore('Pike Place Market', 23, 65, 6.3);
pikePlace.calcCustomersThisHour();
pikePlace.calcCookiesThisHour();

var seaTac = new CookieStore('Seatac', 3, 24, 1.2);
seaTac.calcCustomersThisHour();
seaTac.calcCookiesThisHour();

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
seattleCenter.calcCustomersThisHour();
seattleCenter.calcCookiesThisHour();

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
capitolHill.calcCustomersThisHour();
capitolHill.calcCookiesThisHour();
var alki = new CookieStore('Alki', 2, 16, 4.6);
alki.calcCustomersThisHour();
alki.calcCookiesThisHour();

renderHeader();
pikePlace.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
