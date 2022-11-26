type Theme = "purplish" | "scotland" | "boring" | "boring-dark" | "emerald";


const storeTheme = (theme: Theme) => {
   localStorage.setItem("theme", theme);
}

export const applyTheme = () => {
    const colorThemes = document.querySelectorAll('[name="theme"]');
    const currentTheme = localStorage.getItem("theme");
    console.log(currentTheme)
    if (currentTheme === null) storeTheme("boring-dark"); // default theme
    colorThemes.forEach(theme => {
        const themeOption = theme as HTMLInputElement;
        console.log(themeOption.id)
        if (themeOption.id === currentTheme) {
            console.log("true!!")
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
