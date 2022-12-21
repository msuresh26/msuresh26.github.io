function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();//
  var ampm = ' AM'
  if (h >12) {
    h = h-12;
    ampm = ' PM'
  }
  document.getElementById('time').innerHTML = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + ampm;
}

setInterval(time, 1000);