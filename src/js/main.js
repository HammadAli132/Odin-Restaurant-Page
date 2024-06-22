import loadHeroSection from "./heroSection";
import loadMenuSection from "./menuSection";
import loadAboutSection from "./aboutSection";

function loadMain() {
    const main = document.createElement('main');
    main.appendChild(loadHeroSection());
    main.appendChild(loadMenuSection());
    main.appendChild(loadAboutSection());
    document.body.appendChild(main);
};

export default loadMain;