var deadline = new Date("dec 31, 2022 15:37:25").getTime();
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("days12").innerHTML =days ;
document.getElementById("hours12").innerHTML =hours;
document.getElementById("minutes12").innerHTML = minutes; 
document.getElementById("seconds12").innerHTML =seconds; 
if (t < 0) 
    {
        clearInterval(x);
        document.getElementById("demo12").innerHTML = "TIME UP";
        document.getElementById("days12").innerHTML ='0';
        document.getElementById("hours12").innerHTML ='0';
        document.getElementById("minutes12").innerHTML ='0' ; 
        document.getElementById("seconds12").innerHTML = '0'; 
    }
}, 1000);