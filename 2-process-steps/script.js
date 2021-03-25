const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    console.log(currentActive)
    update();

})


prev.addEventListener('click', () => {
    currentActive--;
    console.log(currentActive)
    if(currentActive < 1) {
        currentActive = 1;
    }

    update();

})

function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
            console.log("index = ", index, ", currentActive = ",currentActive)
        }
        else{
            circle.classList.remove('active')
            console.log("index = ", index, ", currentActive = ",currentActive)
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length-1)/(circles.length-1)*100 + '%';
    console.log(actives.length-1, "---", circles.length-1);

    if(currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }



}
