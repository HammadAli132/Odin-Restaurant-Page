import getGrid from "./menuGrid";
import img1 from '../assets/card1.jpg';
import img2 from '../assets/card2.jpg';
import img3 from '../assets/card3.jpg';
import img4 from '../assets/card3.jpg';
import img5 from '../assets/card1.jpg';
import img6 from '../assets/card2.jpg';

function loadMenuSection() {
    const images = [img1, img2, img3, img4, img5, img6];
    const menuSection = document.createElement('section');
    menuSection.id = 'menu';
    const secHeading = document.createElement('h1');
    secHeading.classList.add('section-heading');
    secHeading.innerText = 'Our Menu';
    const underline = document.createElement('div');
    underline.classList.add('underline');
    const menuGrid = getGrid(6);

    for (let i = 0; i < 6; i++) {
        menuGrid.cards[i].image.src = images[i];
    }
    
    menuSection.appendChild(secHeading);
    menuSection.appendChild(underline);
    menuSection.appendChild(menuGrid.grid);

    return menuSection;
};

export default loadMenuSection;