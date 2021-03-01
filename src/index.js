// Javascript!
import './styles.scss';
const content = document.querySelector('#content');

const header = document.createElement('header');
const main = document.createElement('main');

// const heading = document.createElement('h1');
// heading.textContent = 'My Restaurant';

// header.appendChild(heading);

const nav = document.createElement('nav');

const homebtn = document.createElement('button');
const menubtn = document.createElement('button');
const contactbtn = document.createElement('button');



homebtn.textContent = "Home"
menubtn.textContent = "Menu"
contactbtn.textContent = "Contact"

nav.appendChild(homebtn);
nav.appendChild(menubtn);
nav.appendChild(contactbtn);

header.appendChild(nav);


content.appendChild(header);
content.appendChild(main);
