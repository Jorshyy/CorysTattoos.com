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


