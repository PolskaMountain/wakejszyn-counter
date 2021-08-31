// Set the date we're counting down to
var countDownDate = new Date("Jun 24, 2022").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;


  var percent = ((distance / 1000) / 25574400 * 100);

  // if (percent > 100) {
  //   percent = 100;
  // }

  document.getElementById("progress").style.width = percent + "%";
  document.getElementById("progress-text").innerHTML = "Zostało " + percent + "% Roku Szkolnego";

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


}, 1000);



document.getElementById("zegar").volume = 0.2;