'use-strict;';
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Make header/footer row function
//PUT RENDER FUNCTION INTO OBJECT CONTRUCTOR IN ORDER FOR FORM TO WORK
//PARSE INT the data from form so it works in the object constructor
//function render table
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var allLocations = [];
var theTable = document.getElementById('table');

function CookieStore(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookiesSold = 0;
  this.hourlyCookieSales = 0;
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
    //****Creating total cookie
    this.totalDailyCookiesSold += (totalCookieSales);
  }
};
//**Attempting to make totals per hour
// CookieStore.prototype.calcHourlyTotalsForAllStores = function() {
//   for (var i = 0 i < hours.length; i++) {
//     for (var j = 0; j < hours.length; j++) {
//       this.hourlyCookieSales[j] += this.cookiesEachHour[i];
//     }
//   }
// };
//****Rendering all the head
var renderHeader = function() {
  //**Render first head
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = 'Location';
  trEL.appendChild(thEL);
  //***Render hours in for loop
  for (var i = 0; i < hours.length; i++) {
    var thEL = document.createElement('th');
    thEL.textContent = hours[i];
    trEL.appendChild(thEL);
  }
  theTable.appendChild(trEL);
  //***Render final header
  thEL = document.createElement('th');
  thEL.textContent = 'Total Daily Cookie Sales';
  trEL.appendChild(thEL);
};

CookieStore.prototype.render = function() {
  //****Rendering location name
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
  //***Rendering final row with total sales for day
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
for (var i = 0; i < allLocations.length; i++) {
  allLocations[i].render();
};
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Start even listener

function handleStoreSubmit(submit) {
  event.preventDefault();
  var newStoreLocation = event.target.storeLocation.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var avgCookie = event.target.avgCookiesSold.value;
  new CookieStore(newStoreLocation, minCustomers, maxCustomers, avgCookie);
  console.log('in the function');
  event.target.storeLocation.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCookiesSold.value = null;
  // renderallstores
};
var moreStores = document.getElementById('moreStores');

moreStores.addEventListener('submit', handleStoreSubmit);
