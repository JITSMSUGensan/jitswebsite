import { isLightMode, initializeTheme, toggleTheme } from "./themes.js";
import { fadeNavigationBackdropCallback, fadeNavigationCallback, fadeNavigation, fadeNavigationBackdrop } from "./nav.js";
import Toggle from "./toggle.js";
import MyLog from "./mylog.js";
import Scroller from "./scroll.js";

const logger = new MyLog('Main');

try {

    document.addEventListener('DOMContentLoaded', () => {
        /* Theme Initialization */
        initializeTheme();

        /* darkMode Toggle Initalization  */
        const darkModeToggleBar = document.getElementById('darkModeToggleBar');
        const darkModeToggleButton = document.getElementById('darkModeToggleButton');
        const darkModeToggleCallback = toggleTheme;
        const darkModeToggle = {
            toggleBar: darkModeToggleBar,
            toggleButton: darkModeToggleButton,
            toggleCallback: darkModeToggleCallback,
            toggleState: isLightMode(),
        }
        new Toggle(darkModeToggle);

        const navigationBackdrop = document.getElementById('navigationBackdrop'); 
        const navigationBar = document.getElementById('navigationBar');

        /* Scroller Initialization */
        const scroller = new Scroller();

        /* Fade in the navigation background during user scrolls down  */
        scroller.bindCallbackOnScrollDuring(fadeNavigationBackdropCallback(navigationBackdrop, scroller)); 
        fadeNavigationBackdrop(navigationBackdrop, scroller);

        /* Drawer the navigation bar if the user scrolls down */ 
        scroller.bindCallbackOnScrollDuring(fadeNavigationCallback(navigationBar, navigationBackdrop, scroller));

        const unsupportedBrowserNotice = document.getElementById('unsupportedBrowserNotice');
        if(!(!!window.chrome)) unsupportedBrowserNotice.classList.remove('hidden');
    });

} catch (error) {

    logger.error('Something wrong happened during DOMContentLoaded');
    logger.error(error.message ? error.message : error);

};
