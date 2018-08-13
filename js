var now = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var checkTime = function() {
  var today = weekday[now.getDay()];
  var timeDiv = document.getElementById('timeDiv');
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minutes = now.getMinutes();

  //add AM or PM
  var suffix = hour >= 12 ? "PM" : "AM";

  // add 0 to one digit minutes
  if (minutes < 10) {
    minutes = "0" + minutes
  };

  if (dayOfWeek == 0) {
    hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
    timeDiv.innerHTML = 'iwe\'re Closed! <br>Our phone lines will be open <em>tomorrow</em> at 9:00AM.';
    timeDiv.className = 'closed';
  } 

 else  if ( dayOfWeek == 6) {
    hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
    timeDiv.innerHTML = 'we\'re Closed! <br>Our phone lines will be open on <em>Monday</em> at 9:00AM.';
    timeDiv.className = 'closed';
  }
  
  else if ((dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hour >= 9 && hour <= 17) {
    hour = ((hour + 11) % 12 + 1);
    timeDiv.innerHTML = 'we\'re open!';
    timeDiv.className = 'open';
  } 
  
  else {
    if (hour == 0 || hour > 12) {
      hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
    }
    timeDiv.innerHTML = 'we\'re closed!<br> Our phone lines will be open <em>tomorrow</em> at 9:00AM.';
    timeDiv.className = 'closed';
  }
};

var currentDay = weekday[now.getDay()];
var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

setInterval(checkTime, 1000);
checkTime();
