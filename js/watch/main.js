function clockRunner() {
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  var px = "AM";
  if (hour > 12) {
    px = "PM";
  }
  if (hour > 12) {
    hour -= 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (second < 10) {
    second = "0" + second;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  var clock = hour + ":" + minute + ":" + second + " " + px;
  document.getElementById("watch").textContent = clock;
  setTimeout(clockRunner, 1000);
}
clockRunner();
