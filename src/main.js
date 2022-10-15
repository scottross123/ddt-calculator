export const renderPreferment = () => {
    const label = document.createElement('label');
    label.setAttribute('id', 'preferment-label')
    label.innerHTML = `
        Preferment Temperature
        <input class="temp-input" id="preferment" type="number">
    `;
    const form = document.getElementsByTagName('form').item(0);
    const frictionLabel = document.getElementById('friction-label');
    form.insertBefore(label, frictionLabel);
}

export const removePreferment = () => {
    const preferment = document.getElementById('preferment-label');
    //preferment.nextElementSibling.remove();
    preferment.remove();
}

const checkbox = document.getElementById("preferment-checkbox");
checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
        renderPreferment();       
        console.log("checked:", event.target.checked)
    } else {
        removePreferment();
        console.log("unchecked:", event.target.checked)
    }
});

const getMultiplicativeFactor = () => {
    
}

