let sp1, sp2;
function makePromise (currsec) {
    let pr = new Promise(function(resolve, reject){
        if(currsec % 2 === 0){
            resolve("Hurrey! Project done ")
        }else{
            reject("So sad! couldn't complete the project ")
        }
    })
    return pr;
};

function success (msg) {
    sp1.innerHTML += "<br>" + msg;
    sp2.innerHTML =  "😀😀"; 
};

function failure (msg) {
    sp1.innerHTML += "<br>" +  msg;
    sp2.innerHTML =  "😥😥" ; 
}

function doTask () {
    let today = new Date();
    let currsec = today.getSeconds();
    
    sp1 = document.getElementById("result")
    sp2 = document.getElementById("icn")

    sp1.innerHTML = "Currvalue:"+ currsec;

    let proObj = makePromise(currsec)
    proObj.then(success,failure); 
    
    
};