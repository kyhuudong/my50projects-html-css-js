const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        console.log('x', x)
        console.log('y', y)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        console.log('buttonTop', buttonTop)
        console.log('buttonLeft', buttonLeft)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        console.log('xInside', xInside)
        console.log('yInside', yInside)
        

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})