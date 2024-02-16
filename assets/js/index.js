const ul = document.querySelector('header ul');
const checkBoxHamburguer = document.querySelector('#close-menu');
const h1 = document.querySelector('header h1');

ul.onclick = () => {
    checkBoxHamburguer.checked = false;
}

h1.onclick = () => {
    checkBoxHamburguer.checked = false;
}
