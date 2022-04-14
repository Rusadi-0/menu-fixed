function t(x){
  if(x == 1){
    document.getElementById('t'+x).innerHTML = `<ion-icon id="tt${x}" onclick="t(${x})" class="okk" name="home"></ion-icon>`;
    document.getElementById('t2').innerHTML = `<ion-icon id="tt2" onclick="t(2)" name="calendar-outline"></ion-icon>`;
    document.getElementById('t3').innerHTML = `<ion-icon id="tt3" onclick="t(3)" name="images-outline"></ion-icon>`;
    document.getElementById('t4').innerHTML = `<ion-icon id="tt4" onclick="t(4)" name="mail-outline"></ion-icon>`;
    document.getElementById('t5').innerHTML = `<ion-icon id="tt5" onclick="t(5)" name="map-outline"></ion-icon>`;
  }
  if(x == 2){
    document.getElementById('t1').innerHTML = `<ion-icon id="tt1" onclick="t(1)" name="home-outline"></ion-icon>`;
    document.getElementById('t'+x).innerHTML = `<ion-icon id="tt${x}" onclick="t(${x})" class="okk" name="calendar"></ion-icon>`;
    document.getElementById('t3').innerHTML = `<ion-icon id="tt3" onclick="t(3)" name="images-outline"></ion-icon>`;
    document.getElementById('t4').innerHTML = `<ion-icon id="tt4" onclick="t(4)" name="mail-outline"></ion-icon>`;
    document.getElementById('t5').innerHTML = `<ion-icon id="tt5" onclick="t(5)" name="map-outline"></ion-icon>`;
  }
  if(x == 3){
    document.getElementById('t1').innerHTML = `<ion-icon id="tt1" onclick="t(1)" name="home-outline"></ion-icon>`;
    document.getElementById('t2').innerHTML = `<ion-icon id="tt2" onclick="t(2)" name="calendar-outline"></ion-icon>`;
    document.getElementById('t'+x).innerHTML = `<ion-icon id="tt${x}" onclick="t(${x})" class="okk" name="images"></ion-icon>`;
    document.getElementById('t4').innerHTML = `<ion-icon id="tt4" onclick="t(4)" name="mail-outline"></ion-icon>`;
    document.getElementById('t5').innerHTML = `<ion-icon id="tt5" onclick="t(5)" name="map-outline"></ion-icon>`;
  }
  if(x == 4){
    document.getElementById('t1').innerHTML = `<ion-icon id="tt1" onclick="t(1)" name="home-outline"></ion-icon>`;
    document.getElementById('t2').innerHTML = `<ion-icon id="tt2" onclick="t(2)" name="calendar-outline"></ion-icon>`;
    document.getElementById('t3').innerHTML = `<ion-icon id="tt3" onclick="t(3)" name="images-outline"></ion-icon>`;
    document.getElementById('t'+x).innerHTML = `<ion-icon id="tt${x}" onclick="t(${x})" class="okk" name="mail"></ion-icon>`;
    document.getElementById('t5').innerHTML = `<ion-icon id="tt5" onclick="t(5)" name="map-outline"></ion-icon>`;
  }
  if(x == 5){
    document.getElementById('t1').innerHTML = `<ion-icon id="tt1" onclick="t(1)" name="home-outline"></ion-icon>`;
    document.getElementById('t2').innerHTML = `<ion-icon id="tt2" onclick="t(2)" name="calendar-outline"></ion-icon>`;
    document.getElementById('t3').innerHTML = `<ion-icon id="tt3" onclick="t(3)" name="images-outline"></ion-icon>`;
    document.getElementById('t4').innerHTML = `<ion-icon id="tt4" onclick="t(4)" name="mail-outline"></ion-icon>`;
    document.getElementById('t'+x).innerHTML = `<ion-icon id="tt${x}" onclick="t(${x})" class="okk" name="map"></ion-icon>`;
  }
}