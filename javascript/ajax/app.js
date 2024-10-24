let xhr;
let endpoint = "person_details.json";

function connect () {
    xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = processResponse;
    xhr. open("Get", endpoint, true);
    xhr.send(null)
};

function processResponse () {
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonstr = xhr.responseText;
        let personObj = JSON.parse(jsonstr)
        let personDiv = document.getElementById("person")
        personDiv.innerHTML = `<span> Name:</span> ${personObj.name} <br> <span> Age:</span>  ${personObj.age}`
        
        let projArr = personObj.project
        let str;
        for(proj of projArr){
            str = str + proj.name +","
        }
        str = str.substring (0, str.lastIndexOf(","));
        personDiv.innerHTML += `<br><span> project:</span> ${str}`;
    }
}