import loadHeroSection from "./heroSection";

function loadMain() {
    const main = document.createElement('main');
    main.appendChild(loadHeroSection());
    document.body.appendChild(main);
};

export default loadMain;