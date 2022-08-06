function myComputerFunction() {    
    var computerPopupHidden = document.getElementById("computerPopup");
    computerPopupHidden.classList.add("computerPopupVisible");

    document.getElementById("error95").play();
    console.log('your audio is started just now');
}

function myComputerFunction2() {
    var computerPopupHidden = document.getElementById("computerPopup");
    computerPopupHidden.classList.remove("computerPopupVisible");
}