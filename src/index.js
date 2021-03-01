// Javascript!
import './styles.scss';
const content = document.querySelector('#content');

const header = document.createElement('header');
const main = document.createElement('main');

const heading = document.createElement('h1');
heading.textContent = 'My Restaraunt';

header.appendChild(heading);

const homebtn = document.createElement('button');
const menubtn = document.createElement('button');
const contactbtn = document.createElement('button');

homebtn.textContent = "Home"
menubtn.textContent = "Menu"
contactbtn.textContent = "Contact"

header.appendChild(homebtn);
header.appendChild(menubtn);
header.appendChild(contactbtn);


content.appendChild(header);
content.appendChild(main);
