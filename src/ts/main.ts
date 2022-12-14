import { setWaterTemperature } from "./waterTemperature";
import { accordion } from "./accordion.js";
import { setInputEventListeners } from "./setInputEventListeners.js";
import { setCheckboxEventListener }  from "./setCheckboxEventListener";
import { removePreferment, renderPreferment } from "./preferment";
import { setThemePickerListener, applyTheme } from "./theme";

const $ = {
    tempInputs: document.getElementsByClassName('temp-input'),
    accordionItems: document.getElementsByClassName('accordion-item'),
    prefermentCheckbox: document.getElementById('preferment-checkbox'),
    themePicker: document.getElementById('theme-picker'),
};

setInputEventListeners($.tempInputs, setWaterTemperature);
accordion($.accordionItems);
setCheckboxEventListener(
    $.prefermentCheckbox!,
    renderPreferment,
    removePreferment,
    setWaterTemperature
);
setWaterTemperature();
applyTheme();
setThemePickerListener($.themePicker!);

