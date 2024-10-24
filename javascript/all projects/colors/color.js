
/*const getColors = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.querySelector(".color-code").innerText = randomCode;


    //navigator.clipboard.writeText(randomCode);
}
document.querySelector(".btn").addEventListener("click", getColors);

getColors();*/

const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".color-code");

const getColors = () => {
    btn.addEventListener("click",() =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;
});
};

getColors();
