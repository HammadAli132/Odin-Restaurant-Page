function loadFooter() {
    const date = document.createElement('span');
    date.innerText = new Date().getFullYear();

    const footer = document.createElement('footer');
    footer.innerHTML = `&copy; Copyright ${date.innerText} - All Rights Reserved`;

    document.body.appendChild(footer);
};

export default loadFooter;