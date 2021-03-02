import lobster from './img/menu/Lobster-Thermidor.jpg';
import fishnchips from './img/menu/fish-and-chips.jpg';
import caviar from './img/menu/caviar.jpeg';
import pizza from './img/menu/pizza.jpg';

const MenuPage = (main) => {
  const grid = document.createElement('div');
  grid.setAttribute('id', 'menu-grid');

  const menuItems = {
    Lobster: { img: lobster, cost: '25' },
    'Fish and Chips': { img: fishnchips, cost: '25' },
    Caviar: { img: caviar, cost: '25' },
    Pizza: { img: pizza, cost: '25' },
  };

  Object.keys(menuItems).forEach((menuItem) => {
    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('h3');
    name.textContent = menuItem;

    const image = document.createElement('img');
    image.src = menuItems[menuItem].img;

    item.append(name, image);
    grid.appendChild(item);
  });

  main.appendChild(grid);
};

export default MenuPage;
