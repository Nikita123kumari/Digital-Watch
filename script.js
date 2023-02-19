function displayTime() {
  let dateTime = new Date();
  let h = dateTime.getHours();
  let m = dateTime.getMinutes();
  let s = dateTime.getSeconds();
  let session = document.getElementById('session');

  if (h >= 12) {
    session.innerHTML = 'PM'
  } else {
    session.innerHTML = 'AM'
  }
  if (h > 12) {
    h = h - 12;
  }
  document.getElementById('hour').innerHTML = h;

  document.getElementById('min').innerHTML = m;

  document.getElementById('sec').innerHTML = s;
}
setInterval(displayTime, 10);