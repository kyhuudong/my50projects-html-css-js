const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Hi, em',
    'Hi, em em',
    'Hi, anh',
    'Hi, anh anh'
]

const types = ['info','success','error']

button.addEventListener('click', () => createNotification())

function createNotification(type=null, message=null) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type ? type : getRandomType())
    toast.innerText = message ? message : getRandomMessage() 

    toasts.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 3000)

}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}