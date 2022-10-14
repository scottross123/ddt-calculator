export const renderPreferment = () => {
    const label = document.createElement('label');
    label.setAttribute('id', 'preferment-label')
    label.innerHTML = `
        Preferment Temperature
        <input id="preferment" type="number">
    `;
    const form = document.getElementsByTagName('form').item(0);
    const waterLabel = document.getElementById('water-label');
    const br = document.createElement('br');
    label.insertAdjacentElement('afterend', br);
    form.insertBefore(label, waterLabel);
}

export const removePreferment = () => {
    const preferment = document.getElementById('preferment-label');
    //preferment.nextElementSibling.remove();
    preferment.remove();
}

const checkbox = document.getElementById("preferment-checkbox");
checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
        removePreferment();
        console.log("hi")
    } else {
        renderPreferment()
        console.log('bye')
    }
});