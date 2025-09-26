let resSpan;

function calculateSquare(value) {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
        let num = Number(value);       
        if (isNaN(num)){
            reject ("can't calc square of a non numeric data");
        };
        resolve (num*num);
    }, 1000);
    })
};


function  doTask(){
   let inp =  document.getElementById("userinp");
   let resSpan = document.getElementById("result");
   let data = inp.value;
  let pr = calculateSquare(data);
  pr.then((result) => {
    resSpan.innerHTML += `It's square is ${result} <br>`;
  }, (failure) => {
    resSpan.innerHTML += `${failure} <br>`;
  })

  resSpan.innerHTML = `Curr Value : ${data} <br>`;
};

