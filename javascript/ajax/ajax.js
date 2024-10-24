let xhr;
let timeZoneList;
let endpoint = "http://worldtimeapi.org/api/timezone";

function loadtimeZone () {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("Get", endpoint, true);
    xhr.send(null)
};

function processResponse() {
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonStr = xhr.responseText;  
        console.log(jsonStr)  
        let str = ""; 
        let countryArr = JSON.parse(jsonStr)
         
        countryArr.forEach((country ) => {
            str =+ `<option>${country}</option>`
        });        
    }
}
processResponse()
 timeZoneList = document.getElementById("timezone");
 timeZoneList.innerHTML = str;

function showDate() {
    let timeZoneName = timeZoneList.value;
    let endpoint2 = endpoint + "/"+ timeZoneName ;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processTime;
    xhr.open("Get", endpoint2, true);
    xhr.send(null);
}

function processTime() {
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonstr = xhr.responseText;
        let obj = JSON.parse(jsonstr);
        let dateTime = obj.datetime;
        let today = new Date(dateTime);
        let  datestr= today.toLocaleString("en-US", {timezone : timeZoneName});
        
        let globalDate = new Date(datestr)
        
        let globalDateTimeStr = globalDate.toDateString() + "," + globalDate.toLocaleTimeString
        let span = document.getElementById("currentdatetime");
        span.innerHTML = globalDateTimeStr    
    }
}
window.onload = loadtimeZone; 