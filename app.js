'use-strict';
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allLocations = [];
var theTable = document.getElementById('table');
var el = document.getElementById('moreStores');

function CookieStore(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDaily = 0;
  this.calcCustomersThisHour();
  this.calcCookiesThisHour();
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
    this.totalDaily += this.cookiesEachHour[j];
  }
  this.cookiesEachHour.push(this.totalDaily);
};
// Push hours to table header
var renderHeader = function() {
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = 'Locations';
  trEL.appendChild(thEL);
  for (var i = 0; i < hours.length; i++) {
    var thEL = document.createElement('th');
    thEL.textContent = hours[i];
    trEL.appendChild(thEL);
  }
  thEL = document.createElement('th');
  thEL.textContent = 'Daily';
  trEL.appendChild(thEL);
  theTable.appendChild(trEL);
};

// Push totals to TD's in DOM
CookieStore.prototype.render = function() {
  var trEL = document.createElement('tr');
  var tdEL = document.createElement('td');
  tdEL.textContent = this.locationName;
  trEL.appendChild(tdEL);

  for (var i = 0; i < hours.length + 1; i++) {
    var tdEL = document.createElement('td');
    tdEL.textContent = this.cookiesEachHour[i];
    trEL.appendChild(tdEL);
  }
  theTable.appendChild(trEL);
};

// Footer TOTALLLLL
function renderFooter() {
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = 'Total';
  trEL.appendChild(thEL);
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allLocations.length; j++) {
      hourlyTotal += allLocations[j].cookiesEachHour[i];
      totalOfTotals += allLocations[j].cookiesEachHour[i];
    }
    thEL = document.createElement('th');
    thEL.textContent = hourlyTotal;
    trEL.appendChild(thEL);
  }
  thEL = document.createElement('th');
  thEL.textContent = totalOfTotals;
  trEL.appendChild(thEL);
  theTable.appendChild(trEL);
};

var pikePlace = new CookieStore('Pike Place Market', 23, 65, 6.3);
var seaTac = new CookieStore('Seatac', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

function renderTable() {
  theTable.innerHTML = '';
  renderHeader();
  for (i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
  renderFooter();
}
renderTable();
// Handler for listener
function handleStoreSubmit(event) {
  event.preventDefault();
  var newStoreLocation = event.target.storeLocation.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookie = parseFloat(event.target.avgCookiesSold.value);
  for (var i = 0; i < allLocations.length; i++) {
    if (newStoreLocation === allLocations[i].locationName) {
      allLocations[i].minCustomersPerHour = minCustomers;
      allLocations[i].maxCustomersPerHour = maxCustomers;
      allLocations[i].avgCookiesPerCustomer = avgCookie;
      clearForm();
      allLocations[i].totalDaily = 0;
      allLocations[i].customersEachHour = [];
      allLocations[i].cookiesEachHour = [];
      allLocations[i].calcCustomersThisHour();
      allLocations[i].calcCookiesThisHour();
      console.log('A match was found at index', allLocations[i]);
      renderTable();
      return;
    }
  }

  new CookieStore(newStoreLocation, minCustomers, maxCustomers, avgCookie);

  function clearForm() {
    event.target.storeLocation.value = null;
    event.target.minCustomers.value = null;
    event.target.maxCustomers.value = null;
    event.target.avgCookiesSold.value = null;
  }
  clearForm();
  renderTable();
};

el.addEventListener('submit', handleStoreSubmit);
