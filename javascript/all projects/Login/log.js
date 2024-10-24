let formClass = document.getElementsByClassName("form");
let PopupContainer = document.getElementById("popup");

function addPopup() {
    formClass.classList.add("Popup");
    PopupContainer.classList.remove("Form");
}

function removePopup() {
    formClass.classList.remove("Popup")
    PopupContainer.classList.add("Form");
}