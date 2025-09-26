let Input = document.querySelector("#calcInp");
//let EqualBtn = document.querySelector(".equalBtn");
let buttons = document.querySelectorAll("button")

let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            console.log(string);
            
            Input.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = "";
            Input.value = string
        } else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            Input.value = string;
        }
        else{
            string += e.target.innerHTML;
            Input.value = string;
        }

        
    })
})