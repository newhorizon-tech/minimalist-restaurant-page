// Javascript!
import './styles.scss';
import {InitialPage} from './initial';
import {HomePage} from './home';
import {MenuPage} from './menu';
import {ContactPage} from './contact';

const buttons = InitialPage();

const DisplayHome = () => {
  const main = document.querySelector('main');
  main.innerHTML = "";
  HomePage();
}

const DisplayMenu = () => {
  const main = document.querySelector('main');
  main.innerHTML = "";
  MenuPage();
}

const DisplayContact = () => {
  const main = document.querySelector('main');
  main.innerHTML = "";
  ContactPage();
}




buttons.homebtn.addEventListener('click',DisplayHome);
buttons.menubtn.addEventListener('click',DisplayMenu);
buttons.contactbtn.addEventListener('click',DisplayContact);
