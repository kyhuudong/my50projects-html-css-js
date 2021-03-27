const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99)
        clearInterval(int)


    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0 , 100, 30, 0)}px)`

}


//From num parameters start from 0 - 100(optional) , and the attribute start from 1 - 0 or any kind of attribute and range
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

//range of a variable 
//interval will run until you clear it by using clear interval