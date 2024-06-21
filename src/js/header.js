function loadHeader() {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');
    const btnNames = ['Home', 'Menu', 'About'];
    btnNames.forEach(btn => {
        const button = document.createElement('button');
        button.innerText = btn;
        nav.appendChild(button);
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