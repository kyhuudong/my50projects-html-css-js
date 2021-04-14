const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
    let input = e.target.value
    const length = input.length
    const blurValues = 20 - length * 2
    
    background.style.filter = `blur(${blurValues}px)`
})