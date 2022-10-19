export const setCheckboxEventListener = (
    checkbox: Element,
    handleChangeTrue: () => void,
    handleChangeFalse: () => void,
    runFinally?: () => void
) => {
    checkbox.addEventListener("change", (event: Event) => {
        if ((event!.target as HTMLInputElement).checked) {
            handleChangeTrue();
           console.log('ran')
        } else {
            handleChangeFalse();
        }
        if (typeof runFinally !== "undefined") runFinally();
    });
}
