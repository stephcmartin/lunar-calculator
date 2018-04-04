const today = new Date().toDateString();
document.getElementById("today").innerHTML = today;

const apiCall = $.getJSON('http://api.usno.navy.mil/rstt/oneday?date=today&coords=42.36N,71.058W&tz=0', function(data) {
    //data is the JSON string
    console.log('data from api call is:', data)
    console.log('data.fracillum:', data.fracillum)
    document.getElementById("fracillum").innerHTML = data.fracillum + ' Of Full Moon';
});