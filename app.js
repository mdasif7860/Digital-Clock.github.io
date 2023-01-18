let hrElem = document.getElementById("hr");
let mintElem = document.getElementById("mint");
let secElem = document.getElementById("sec");
let ampmElem = document.getElementById("ampm");

function clock() {
  let hr = new Date().getHours();
  let mint = new Date().getHours();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  if (hr > 12) {
    hr = hr - 12;
    ampmElem.innerHTML = "PM";
  }
  if (mint < 10) {
    mint = `0${mint}`;
  }
  if(sec < 10){
    sec = `0${sec}`;
  }
  if(hr < 10){
    hr = `0${hr}`;
  }
  hrElem.innerHTML = hr + ":";
  mintElem.innerHTML = mint + ":";
  secElem.innerHTML = sec;
  setTimeout(() => {
    clock();
  }, 1000);
}
clock();
