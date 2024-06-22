function loadHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const btnNames = ['Home', 'Menu', 'About'];
    const sectionIDs = ['hero', 'menu', 'about'];
    let i = 0;
    btnNames.forEach(btn => {
        const button = document.createElement('button');
        button.innerText = btn;
        button.setAttribute('data-scroll-to', sectionIDs[i]);
        button.addEventListener('click', () => {
            const section = document.getElementById(button.getAttribute('data-scroll-to'));
            section.scrollIntoView({behavior: "smooth"});
        });
        nav.appendChild(button);
        i++;
    });
    const title = document.createElement('h1');
    title.innerText = 'Spicy Foods';
    const titleLink = document.createElement('a');
    titleLink.href = 'index.html';
    titleLink.appendChild(title);
    titleLink.setAttribute('id', 'title');
    header.appendChild(titleLink);
    header.appendChild(nav);

    document.querySelector('body').appendChild(header);
};

export default loadHeader;