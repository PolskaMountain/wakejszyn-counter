var countDownDate = new Date("Jun 24, 2022").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var percent = (distance / 1000 / 25574400) * 100;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById("progress").style.width = `${percent}%`;
  document.getElementById("progress-text").innerHTML = `Zostało ${percent}% Roku Szkolnego`;

}, 1000);



document.getElementById("zegar").volume = 0.2;