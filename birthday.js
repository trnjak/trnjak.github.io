var year = 2024;
var countDownDate = new Date("Sep 18, " + year + " 00:00:00").getTime();
var age = 18;

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("birthday").innerHTML = age + "th birthday in: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  if(distance == 0) {
    document.getElementById("birthday").innerHTML = "YIPPIE! :D >~<";
  }

  if (distance < 0) {
    age++;
    year++;
    countDownDate = new Date("Sep 18, " + year + " 00:00:00").getTime();
  }
}, 1000);