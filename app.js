'use-strict;';
//todo: delete table then re render
//**Clear the table, then re render
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var allLocations = [];
var theTable = document.getElementById('table');
var hourlyCookieSales = [];
//***********Object Constructor for new Cookie Store Location
function CookieStore(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookiesSold = 0;
  this.calcCustomersThisHour();
  this.calcCookiesThisHour();
  allLocations.push(this);
}
//***********Math to calc avg customers with a min and max per hour
CookieStore.prototype.calcCustomersThisHour = function() {
  var reference = [];
  for (var i = 0; i < hours.length; i++) {
    var numberCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    reference.push(numberCustomersPerHour);
  }
  this.customersEachHour = reference;
  return numberCustomersPerHour;
};
//***********Math to calc avg cookies sold each hour from min, max, and avg cookie per
CookieStore.prototype.calcCookiesThisHour = function() {
  for (var j = 0; j < hours.length; j++) {
    var totalCookieSales = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(totalCookieSales);
    //****Creating total cookie
    this.totalDailyCookiesSold += (totalCookieSales);
  }
};
//***********Math for hourly totals for all stores EACH hour
calcHourlyTotals = function() {
  for (var i = 0; i < hours.length; i++) {
    var reference = 0;
    for (var j = 0; j < allLocations.length; j++) {
      reference += allLocations[j].cookiesEachHour[i];
    }
    hourlyCookieSales.push(reference);
  }
};

//***********Rendering all the head
var renderHeader = function() {
  //***********Render first head
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = 'Location';
  trEL.appendChild(thEL);
  //***********Render hours in for loop
  for (var i = 0; i < hours.length; i++) {
    var thEL = document.createElement('th');
    thEL.textContent = hours[i];
    trEL.appendChild(thEL);
  }
  theTable.appendChild(trEL);
  //***********Render final header
  thEL = document.createElement('th');
  thEL.textContent = 'Total Daily Cookie Sales';
  trEL.appendChild(thEL);
};
//
//
var deleteFooter = function() {
  var myFooter = document.getElementById('tfoot');
  if (myFooter !== null) {
    myFooter.parent.removeChild(myFooter);
  }
};
//Rendering all the footer
var renderFooter = function() {
  deleteFooter();
  //***********Rendering first box of footer
  var tfootEL = document.createElement('tfoot');
  var trEL = document.createElement('tr');
  var tdEL = document.createElement('td');
  tdEL.textContent = 'Hourly Storewide Totals';
  tfootEL.appendChild(trEL);
  trEL.appendChild(tdEL);
  //*********Testing For For loop
  //***********Rending totals for all stores per hour for all hours of day
  for (var i = 0; i < hours.length; i++) {
    var tdEL = document.createElement('td');
    tdEL.textContent = hourlyCookieSales[i];
    tfootEL.appendChild(trEL);
    trEL.appendChild(tdEL);
  }
  thEL = document.createElement('th');
  thEL.textContent = hourlyCookieSales.reduce(function(a, b) {
    return a + b;
  }, 0);
  trEL.appendChild(thEL);
  theTable.appendChild(tfootEL);
};

CookieStore.prototype.render = function() {
  //***********Rendering location name
  var trEL = document.createElement('tr');
  var tdEL = document.createElement('td');
  tdEL.textContent = this.locationName;
  trEL.appendChild(tdEL);

  for (var i = 0; i < hours.length; i++) {
    //*****Rendering total cookies each hour
    var tdEL = document.createElement('td');
    tdEL.textContent = this.cookiesEachHour[i];
    trEL.appendChild(tdEL);
  }
  theTable.appendChild(trEL);

  //***********Rendering final row with total sales for day
  tdEL = document.createElement('td');
  tdEL.textContent = this.totalDailyCookiesSold;
  trEL.appendChild(tdEL);
};

var pikePlace = new CookieStore('Pike Place Market', 23, 65, 6.3);
var seaTac = new CookieStore('Seatac', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);
renderHeader();
calcHourlyTotals();
renderFooter();
//***********Rendering all the table
for (var i = 0; i < allLocations.length; i++) {
  allLocations[i].render();
};

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Event listener function
function handleStoreSubmit(submit) {
  event.preventDefault();
  var newStoreLocation = event.target.storeLocation.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookie = parseInt(event.target.avgCookiesSold.value);
  new CookieStore(newStoreLocation, minCustomers, maxCustomers, avgCookie);
  event.target.storeLocation.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCookiesSold.value = null;
  for (var i = allLocations.length - 1; i < allLocations.length; i++) {
    allLocations[i].render();
  };
  // calcHourlyTotals();
  // renderFooter();

};
//***********Call Event listener
var moreStores = document.getElementById('moreStores');
moreStores.addEventListener('submit', handleStoreSubmit);
