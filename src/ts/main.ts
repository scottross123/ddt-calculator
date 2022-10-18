import { setWaterTemperature } from "./waterTemperature";
import { accordion } from "./accordion.js";
import { setInputEventListeners } from "./setInputEventListeners.js";
import { setCheckboxEventListener }  from "./setCheckboxEventListener";
import { removePreferment, renderPreferment } from "./preferment";

const tempInputs = document.getElementsByClassName('temp-input');
setInputEventListeners(tempInputs, setWaterTemperature);

const accordionItems = document.getElementsByClassName('accordion-item');
accordion(accordionItems);

const checkbox = document.getElementById('preferment-checkbox');
setCheckboxEventListener(checkbox!, renderPreferment, removePreferment, setWaterTemperature);

setWaterTemperature();