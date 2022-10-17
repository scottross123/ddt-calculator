import { calculateWaterTemperature } from "./calculateWaterTemperature.ts";

const addListenerToPreferment = () => {
    const preferment = document.getElementById('preferment');
    preferment.addEventListener("change", () => calculateWaterTemperature());
}

const renderPreferment = () => {
    const label = document.createElement('label');
    label.setAttribute('id', 'preferment-label')
    label.innerHTML = `
        Preferment Temperature
        <input class="temp-input formula-input" id="preferment" type="number" min=0 value=70>
    `;
    const form = document.getElementsByTagName('form').item(0);
    const frictionLabel = document.getElementById('friction-label');
    form.insertBefore(label, frictionLabel);
    addListenerToPreferment();
}

const removePreferment = () => {
    const preferment = document.getElementById('preferment-label');
    preferment.remove();
}

export const setCheckboxEventListener = () => {
    const checkbox = document.getElementById("preferment-checkbox");
    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            renderPreferment();
        } else {
            removePreferment();
        }
        calculateWaterTemperature();
    });
}