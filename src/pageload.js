import logoimg from './img/logo.jpeg';

const InitialPage = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const homebtn = document.createElement('button');
  const menubtn = document.createElement('button');
  const contactbtn = document.createElement('button');

  homebtn.textContent = "Home";
  menubtn.textContent = "Menu";
  contactbtn.textContent = "Contact";

  nav.appendChild(homebtn);
  nav.appendChild(menubtn);
  nav.appendChild(contactbtn);

  header.appendChild(nav);

  const main = document.createElement('main');

  const mainarea = document.createElement('div');

  const logo = document.createElement('img');
  logo.src = logoimg;
  logo.setAttribute("class", "logo");


  const text = document.createElement("p")
  text.textContent = "Food. You love food. We love food. Come and eat it!"

  main.append(logo,text);

  content.appendChild(header);
  content.appendChild(main);

}

export {InitialPage};
