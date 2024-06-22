import chefImg from '../assets/chef.jpg';

function loadAboutSection() {
    const img = document.createElement('img');
    img.src = chefImg;
    const imgDiv = document.createElement('div');
    imgDiv.id = 'about-image';
    imgDiv.appendChild(img);

    const desc = document.createElement('div');
    desc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit a nulla explicabo quis quam molestias sunt delectus distinctio saepe, tempore, excepturi aperiam neque quod consequuntur laborum autem provident facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse animi veritatis velit doloremque? Lorem ipsum dolor sit amet consectetur adipisicing';
    desc.id = 'aboutdesc';

    const aboutBody = document.createElement('div');
    aboutBody.id = 'about-body';
    aboutBody.appendChild(desc);
    aboutBody.appendChild(imgDiv);

    const underline = document.createElement('div');
    underline.classList.add('underline');
    const secHeading = document.createElement('h1');
    secHeading.classList.add('section-heading');
    secHeading.innerText = 'About Us';

    const aboutSec = document.createElement('section');
    aboutSec.id = 'about';
    aboutSec.appendChild(secHeading);
    aboutSec.appendChild(underline);
    aboutSec.appendChild(aboutBody);

    return aboutSec;
};

export default loadAboutSection;