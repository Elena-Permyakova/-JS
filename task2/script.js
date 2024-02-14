const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    prompt('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const consolelog = document.querySelector('#consolelog');

consolelog.addEventListener('click', () => {
    console.log('Служит для вывода информации в консоль');
})