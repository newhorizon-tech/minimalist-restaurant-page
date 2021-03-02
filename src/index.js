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
  HomePage(main);
}

const DisplayMenu = () => {
  const main = document.querySelector('main');
  main.innerHTML = "";
  MenuPage(main);
}

const DisplayContact = () => {
  const main = document.querySelector('main');
  main.innerHTML = "";
  ContactPage(main);
}




buttons.homebtn.addEventListener('click',DisplayHome);
buttons.menubtn.addEventListener('click',DisplayMenu);
buttons.contactbtn.addEventListener('click',DisplayContact);
