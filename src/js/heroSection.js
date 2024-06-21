function loadHeroSection() {
    const heroSection = document.createElement('section');
    heroSection.id = 'hero';
    const welcome = document.createElement('h2');
    welcome.innerText = 'Welcome To';
    const siteName = document.createElement('h1');
    siteName.innerText = 'Spicy Foods';
    siteName.id = 'site-name-main';
    const desc = document.createElement('p');
    desc.innerText = "Here You'll Find The Best And Delicious Food For Suitable Prices.";
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = 'Order Now!';
    heroSection.appendChild(welcome);
    heroSection.appendChild(siteName);
    heroSection.appendChild(desc);
    heroSection.appendChild(btn);

    return heroSection;
};

export default loadHeroSection;