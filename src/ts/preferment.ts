import { setWaterTemperature } from "./waterTemperature";

const addListenerToPreferment = () => {
    const preferment = document.getElementById('preferment');
    preferment!.addEventListener("change", () => setWaterTemperature());
}

export const renderPreferment = () => {
    const label = document.createElement('label');
    const calculator = document.getElementById('calculator');
    const frictionLabel = document.getElementById('friction-label');

    label.setAttribute('id', 'preferment-label')
    label.innerHTML = `
        Preferment Temperature
        <input class="temp-input formula-input" id="preferment" type="number" min=0 value=70>
    `;
    calculator!.insertBefore(label, frictionLabel);
    addListenerToPreferment();
}

export const removePreferment = () => {
    const preferment = document.getElementById('preferment-label');
    preferment!.remove();
}


