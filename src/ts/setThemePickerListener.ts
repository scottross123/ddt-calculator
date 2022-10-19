export const setThemePickerListener = (themePicker: Element) => {
    themePicker.addEventListener('change', (event: Event) =>
        document.body!.className = (event!.target as HTMLSelectElement).value);
}
