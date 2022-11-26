type Theme = "purplish" | "scotland" | "boring" | "boring-dark" | "emerald";


const storeTheme = (theme: Theme) => {
   localStorage.setItem("theme", theme);
}

export const applyTheme = () => {
    const colorThemes = document.querySelectorAll('[name="theme"]');
    const currentTheme = localStorage.getItem("theme");
    console.log(currentTheme);
    if (currentTheme === null) {
        const defaultTheme = "boring-dark";
        const defaultThemeOption = document.getElementById(defaultTheme) as HTMLInputElement;
        storeTheme(defaultTheme);
        document.body!.className = defaultTheme;
        defaultThemeOption.checked = true;
        return;
    }
    colorThemes.forEach(theme => {
        const themeOption = theme as HTMLInputElement;
        if (themeOption.id === currentTheme) {
            themeOption.checked = true;
            document.body!.className = currentTheme;
        }
    })
}

export const setThemePickerListener = (themePicker: Element) => {
    themePicker.addEventListener('change', (event: Event) => {
        const newTheme = (event!.target as HTMLInputElement).value as Theme;
        storeTheme(newTheme);
        document.body!.className = newTheme;
    })
}
