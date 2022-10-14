export const renderPreferment = () => {
    const label = document.createElement('label');
    label.innerHTML = `
        Preferment Temperature
        <input id="preferment" type="number">
    `;
    const form = document.getElementsByTagName('form').item(0);
    const waterLabel = document.getElementById('water-label');
    const br = document.createElement('br');
    label.insertAdjacentElement('afterend', br);
    form!.insertBefore(label, waterLabel);
}

export const removePreferment = () => {
    
}

const checkbox = document.getElementById("preferment-checkbox");
checkbox!.addEventListener("click", renderPreferment);