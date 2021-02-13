// var year = document.getElementById('year')
var day = document.getElementById('day')
var hours = document.getElementById('hours')
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')


var currentYear = new Date().getFullYear();
var nextyear = new Date(`january 01 ${currentYear + 1} 00:00:00`);


// year.innerHTML = nextyear.getFullYear();



function countDownTime()
{
    var currentTime = new Date();
    var diff = nextyear - currentTime;

    // var d = Math.floor (diff /1000 /60 /60 /24);
    var h = Math.floor (diff /1000 /60 /60) % 24;
    var m = Math.floor (diff /1000 /60) % 60;
    var s = Math.floor (diff /1000 ) % 60;

    seconds.innerHTML = s <10 ? '0' + s: s;
    minutes.innerHTML = m <10 ? '0' + m: m;
    hours.innerHTML = h <10 ? '0' + h: h;
    // day.innerHTML = d <10 ? '0' + d: d;
}


setInterval(countDownTime,1000);