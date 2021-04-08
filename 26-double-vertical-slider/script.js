const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlider = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click',() => changeSlide('up'));
downButton.addEventListener('click',() => changeSlide('down'));

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight;

    if(direction === 'up') {
        activeSlider++;
        if(activeSlider > slidesLength-1)
            activeSlider = 0
    }
    else if(direction === 'down') {
        activeSlider--;
        if(activeSlider < 0)
            activeSlider = slidesLength-1
    }

    slideLeft.style.transform = `translateY(${activeSlider*slideHeight}px)`
    slideRight.style.transform = `translateY(-${activeSlider*slideHeight}px)`
    
}
