import { setWaterTemperature } from "./setWaterTemperature.js";

export const setInputEventListeners = () => {
    const tempInputs = document.getElementsByClassName('temp-input');
    [...tempInputs].map(tempInput =>
        tempInput.addEventListener('change', () => setWaterTemperature())
    );
}