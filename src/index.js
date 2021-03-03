// Javascript!
import './styles.scss';
import favimg from './favicon.png';
import InitialPage from './initial';
import HomePage from './home';
import MenuPage from './menu';
import ContactPage from './contact';

const AddFavicon = () => {
  const head = document.querySelector('head');
  const fav = document.createElement('link');
  fav.href = favimg;
  fav.setAttribute('rel', 'icon');
  head.appendChild(fav);
};

const DisplayHome = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  HomePage(main);
};

const DisplayMenu = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  MenuPage(main);
};

const DisplayContact = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  ContactPage(main);
};

const buttons = InitialPage();
AddFavicon();

buttons.homebtn.addEventListener('click', DisplayHome);
buttons.menubtn.addEventListener('click', DisplayMenu);
buttons.contactbtn.addEventListener('click', DisplayContact);
