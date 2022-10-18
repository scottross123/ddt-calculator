import { calculateWaterTemperature } from "./calculateWaterTemperature.ts";

export const setInputEventListeners = () => {
    const tempInputs = document.getElementsByClassName('temp-input');
    [...tempInputs].map(tempInput =>
        tempInput.addEventListener('change', () => calculateWaterTemperature())
    );
}