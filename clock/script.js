document.addEventListener("DOMContentLoaded", function () {
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");
    var datesElement = document.getElementById("date")
  
    function updateClock() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      } else {
        seconds = seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      } else {
        minutes = minutes;
      }
      if (hours < 10) {
        hours = "0" + hours;
      } else {
        hours = hours;
      }

      if (seconds === "00" || minutes === "00" || hours === "00"){
        hoursElement.classList.add("glow");
        minutesElement.classList.add("glow");
        secondsElement.classList.add("glow");

        setTimeout(function() {
            hoursElement.classList.remove("glow");
            minutesElement.classList.remove("glow");
            secondsElement.classList.remove("glow");
        }, 1000);
      }
  
      hoursElement.innerText = hours;
      minutesElement.innerText = minutes;
      secondsElement.innerText = seconds;
    }
    function updateDay() {
        var today = new Date ();
        var day = today.getDate();
        var month = today.getMonth() +1;
        var year = today.getFullYear();

        if (day < 10){
            day = "0" + day;
        } else {
            day = day;
        }
        if (month < 10) {
            month ="0"+ month ;
        }else {
            month= month;
        }

        var yearShort = year.toString().slice(-2);

        var formattedDate = day + "." + month + "." + yearShort;

        var datesElement = document.getElementById("date");
        datesElement.innerText = formattedDate;


    }
    function updateToday(){
        var today = new Date();
        var daysOfWeek = today.getDay();
        var daysArray = ["Sunday","Monday","tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
        var formattedDay = daysArray[daysOfWeek];
        var TodayElement = document.getElementById("today")
        TodayElement.innerHTML = formattedDay;
    }
  
    setInterval(updateToday, 1000);
    setInterval(updateClock, 1000);
    setInterval(updateDay, 1000);
  });
  