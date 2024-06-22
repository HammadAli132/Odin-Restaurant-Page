import loadHeroSection from "./heroSection";
import loadMenuSection from "./menuSection";

function loadMain() {
    const main = document.createElement('main');
    main.appendChild(loadHeroSection());
    main.appendChild(loadMenuSection());
    document.body.appendChild(main);
};

export default loadMain;