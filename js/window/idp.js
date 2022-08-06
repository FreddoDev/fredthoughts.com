function myImageFileFunction() {    
    var ImageFilePopupHidden = document.getElementById("ImageFilePopup");
    ImageFilePopupHidden.classList.add("ImageFilePopupVisible");

    setTimeout(function() {
        document.getElementById("joke95").play();
    }, 100)

    setTimeout(function() {
        document.getElementById("badjoke95").play();
        
    }, 1500)
}

function myImageFileFunction2() {
    var ImageFilePopupHidden = document.getElementById("ImageFilePopup");
    ImageFilePopupHidden.classList.remove("ImageFilePopupVisible");

    document.getElementById("joke95").currentTime = 0;
    document.getElementById("joke95").pause();

    document.getElementById("badjoke95").currentTime = 0;
    document.getElementById("badjoke95").pause();
}