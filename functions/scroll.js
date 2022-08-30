let check = document.querySelector("#check");
let checkLabel = document.getElementsByClassName("checkbtn");



function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
};


function scrollControl() {
    document.querySelector("nav").addEventListener('wheel', preventScroll);
};


checkLabel[0].addEventListener('click', scrollControl);



