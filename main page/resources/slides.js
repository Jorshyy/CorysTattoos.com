/*

var slideIndex = 0;

const showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("image");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }


showSlides();

















/*
const pic1 = document.getElementsByClassName('image-1')
const pic2 = document.getElementsByClassName('image-2')
const pic3 = document.getElementsByClassName('image-3')
const pic4 = document.getElementsByClassName('image-4')
const pic5 = document.getElementsByClassName('image-5')
const pic6 = document.getElementsByClassName('image-6')
const pic7 = document.getElementsByClassName('image-7')


const nextButton = document.getElementById('next')

const test = document.getElementsByTagName('h1')

nextButton.onclick = function () {
    test.innerHTML = 'blue';
};




/*
const nextButton = document.getElementById('next');

const slideNext = () => {
    document.getElementsByTagName('a').style.margin = '0px 720px 0px 0px'
};


nextButton.onclick = slideNext;


