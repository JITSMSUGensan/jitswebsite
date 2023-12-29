import Toggle from "./toggle.js";
import MyLog from "./mylog.js";
import { isLightMode, initializeTheme, toggleTheme } from "./themes.js";

const logger = new MyLog('Main');

try {
    document.addEventListener('DOMContentLoaded', () => {
        initializeTheme();
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
    });
} catch (error) {
    logger.error('Something wrong happened during DOMContentLoaded');
    logger.error(error.message ? error.message : error);
};
