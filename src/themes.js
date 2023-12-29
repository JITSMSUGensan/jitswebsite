
const themes = {
    light: 'light',
    dark: 'dark'
}

const html = document.documentElement;

const getTheme = () => {
    return localStorage.getItem('theme');
}

const setTheme = (theme) => {
    if(!theme) throw new Error('setTheme - theme is not defined');
    localStorage.setItem('theme', theme);
}

const isLightMode = () => {
    return !html.classList.contains(themes.dark);
}

const isDarkMode = () => {
    return html.classList.contains(themes.dark);
}

const toggleTheme = () => {
    html.classList.toggle(themes.dark);
    if(getTheme() == themes.dark) {
        setTheme(themes.light);
    } else if(getTheme() == themes.light) {
        setTheme(themes.dark);
    }
    // store to localStorage
}

const toggleToTheme = (theme) => {
    if(!theme) throw new Error('toggleToTheme - theme is not defined');
    if(theme == themes.dark) {
        html.classList.add(themes.dark);
        setTheme(themes.dark);
    } else if(theme == themes.light) {
        html.classList.remove(themes.dark);
        setTheme(themes.light);
    }
}

const initializeTheme = () => {
    const theme = getTheme();
    if(theme) {
        if(theme == themes.light) {
            html.classList.remove(themes.dark);
        } else {
            html.classList.add(themes.dark);
        }
    } else {
        setTheme(themes.dark);
    }
}

export { toggleTheme, isDarkMode, isLightMode, toggleToTheme, initializeTheme, themes };