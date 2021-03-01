import logoimg from './img/logo.jpeg';
import {HomePage} from './home';

const InitialPage = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const homebtn = document.createElement('button');
  const menubtn = document.createElement('button');
  const contactbtn = document.createElement('button');

  homebtn.textContent = "Home";
  homebtn.setAttribute("id","homebtn");
  menubtn.textContent = "Menu";
  menubtn.setAttribute("id","menubtn");
  contactbtn.textContent = "Contact";
  contactbtn.setAttribute("id","contactbtn");


  nav.append(homebtn,menubtn, contactbtn);

  header.appendChild(nav);


  content.append(header);
  HomePage();

  return {homebtn, menubtn, contactbtn};
}

export {InitialPage};
