type Theme = 'light' | 'dark';

export const getTheme = (): Theme => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') as Theme;
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
};

export const setColorTechIcons = (theme: Theme) => {
    const icons = document.querySelectorAll('.tech-icon');
    icons.forEach((icon) => {
        if (theme === 'light') {
            icon.classList.add('colored');
        } else {
            icon.classList.remove('colored');
        }
    });
};

export const toggleTheme = () => {
    const element = document.documentElement;
    element.classList.toggle("light");

    const theme = element.classList.contains("light")
        ? "light"
        : "dark";
    localStorage.setItem("theme", theme);
    setColorTechIcons(theme);
};

export const initTheme = () => {
    const theme = getTheme();

    if (theme === 'dark') {
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
    }

    localStorage.setItem('theme', theme);
    setColorTechIcons(theme);
};
