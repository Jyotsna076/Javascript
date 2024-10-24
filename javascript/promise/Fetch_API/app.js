function sendData (){
    let div = document.getElementById("details");
    div.innerHTML = "Sending request...."
    let fName = document.querySelector("input[name='firstName']").value; 
    
    let lName = document.querySelector("input[name='lastName']").value;

    const user = {
        firstName: fName,
        lastName : lName, 
    };
    let jsonStr = JSON.stringify(user);
    let option ={
        method : "Post",
        body : jsonStr,
        Headers : {"Content-Type": "application/json"},
    };
    console.log(option)
    fetch("https://reqres.in/api/users")
    .then((response) => {
        if (response.status !== 200){
            throw new Error (response.status +":" + response.statusText)
        }
        return response.json()
    })
    .then ((data) => {
        div.innerHTML = "Response Receive <br><br>";
        div.innerHTML += `FirstName: ${data.firstName} <br><br>`;
        div.innerHTML += `LastName: ${data.lastName}<br><br>`;
        console.log(data)
        
        let dt = new Date (data.charAt);
        console.log(dt)
        let dateStr = dt.toDateString() + "," + dt.toLocaleTimeString();
        div.innerHTML += `created At: ${dateStr}`
    })//.catch ((error) =>{
    //     alert(error)
    // })
}
