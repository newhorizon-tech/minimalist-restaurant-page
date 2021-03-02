import lobster from './img/menu/Lobster-Thermidor.jpg';
import fishnchips from './img/menu/fish-and-chips.jpg';
import caviar from './img/menu/caviar.jpeg';
import donuts from './img/menu/donuts.jpg';
import pizza from './img/menu/pizza.jpg';


const MenuPage = (main) => {
  console.log("Menu!!");

  const grid = document.createElement("div")
  grid.setAttribute("id","menu-grid");

  const menuItems = { 'Lobster': {img: lobster, cost: '25'},
                      'Fish and Chips' : {img: fishnchips, cost: '25'},
                      'Caviar': {img: caviar, cost: '25'},
                      'Pizza' : {img: pizza, cost: '25'},
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
