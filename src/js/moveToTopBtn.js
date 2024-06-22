import arrow from '../assets/upArrow.png';

function loadMoveToTopBtn() {
    const png = document.createElement('img');
    png.src = arrow;

    const button = document.createElement('button');
    button.id = 'move-to-top-btn';
    button.setAttribute('data-scroll-to', 'hero');
    button.appendChild(png);
    button.addEventListener('click', () => {
        const section = document.getElementById(button.getAttribute('data-scroll-to'));
        section.scrollIntoView({behavior: 'smooth'});
    });

    window.addEventListener('scroll', () => {
        if (scrollY > 100)
            button.style.display = 'flex';
        else
            button.style.display = 'none';
    });

    document.body.appendChild(button);
};

export default loadMoveToTopBtn;