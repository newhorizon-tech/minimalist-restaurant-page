import logoimg from './img/logo.jpeg';

const HomePage = (main) => {
  const content = document.querySelector('#content');

  if (main == null){
    main = document.createElement('main');
  }

  const mainarea = document.createElement('div');

  const logo = document.createElement('img');
  logo.src = logoimg;
  logo.setAttribute("class", "logo");


  const text = document.createElement("p")
  text.textContent = "Food. You love food. We love food. Come and eat!"

  main.append(logo,text);
  content.appendChild(main);

}

export {HomePage};
