let response;
function calculateSqare(value){
    return new Promise(function (resolve , reject){
    setTimeout(() => {
        let num = Number(value)
        if(isNaN (num)){
            reject("cannot calc square of a non numeric data")
        }
        resolve(num * num);
    }, 2000);
});
};

function doTask () {
    let inp = document.getElementById("useinp");
    resSpan = document.getElementById("result");
    let data =  inp.value;
    
    let pr = calculateSqare(data);
    pr.then((result) => {
        resSpan.innerHTML += `'it's square is ${result}`;
    },(failure) => {
        resSpan.innerHTML += ` ${failure}`;
    })
    resSpan.innerHTML = `curr value: ${data}<br>`;
};

