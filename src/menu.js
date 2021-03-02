import lobster from './img/menu/Lobster-Thermidor.jpg';

const MenuPage = () => {
  console.log("Menu!!");
  const main = document.querySelector('main');

  const grid = document.createElement("div")
  grid.setAttribute("id","menu-grid");

  const menuItems = { 'Truffles': {img: lobster, cost: '25'},
                      'Pasta' : {img: lobster, cost: '25'},
                      'Caviar': {img: lobster, cost: '25'},
                      'Donuts': {img: lobster, cost: '25'},
                      'Pizza' : {img: lobster, cost: '25'},
                      'Burger': {img: lobster, cost: '25'},
                      'Lobster Thermidor' : {img: lobster, cost: '40'},
                    };

  for (let menuItem of Object.keys(menuItems)) {
    const item = document.createElement("div");
    item.setAttribute("class","item");

    const name = document.createElement("h3");
    name.textContent = menuItem;

    const image = document.createElement("img");
    image.src =  menuItems[menuItem].img;

    item.append(name,image);
    grid.appendChild(item);
    // console.log(`Dish: ${menuItem}`);
    // console.log(`Image Path: ./img/menu/${menuItems[menuItem].img}`);
    // console.log(`Cost: ${menuItems[menuItem].cost}`);
    // console.log('-'.repeat(50));
  }

  const gridItems = document.createElement("div");

  main.appendChild(grid);
}


export {MenuPage};
