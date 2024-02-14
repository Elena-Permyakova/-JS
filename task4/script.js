console.log(document.querySelector('Google'));

const Google = document.querySelector('#Google');

Google.addEventListener('click', (event) => {

    const userText = prompt('Введите текст');
    Google.textContent = userText;
    console.log('Текст в блоке с id Google изменён на', userText);
    event.preventDefault();
})