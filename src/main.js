export const renderPreferment = () => {
    const label = document.createElement('label');
    label.setAttribute('id', 'preferment-label')
    label.innerHTML = `
        Preferment Temperature
        <input class="temp-input" id="preferment" type="number" min=0 value=70>
    `;
    const form = document.getElementsByTagName('form').item(0);
    const frictionLabel = document.getElementById('friction-label');
    form.insertBefore(label, frictionLabel);
    addListenerToPreferment();
    setWaterTemperature();
}

export const removePreferment = () => {
    const preferment = document.getElementById('preferment-label');
    //preferment.nextElementSibling.remove();
    preferment.remove();
    setWaterTemperature();
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

const getWaterTemperature = () => {
    const temps = document.getElementsByClassName('temp-input');
    const multiplicativeFactor = temps.length;
    const ddt = document.getElementById('ddt').value;
    const totalTempFactor = multiplicativeFactor * ddt;
    const sumOfTemps = [...temps].reduce(
        (prevTemp, currTemp) => prevTemp + parseInt(currTemp.value), 0
    );
    console.log(totalTempFactor - sumOfTemps);
    return totalTempFactor - sumOfTemps;
}

function setWaterTemperature() {
    const waterTemp = document.getElementById('water-temp');
    waterTemp.innerHTML = `${getWaterTemperature()}°F`; 
}

const ddt = document.getElementById('ddt');
ddt.addEventListener("change", () => setWaterTemperature());

const flour = document.getElementById('flour');
flour.addEventListener("change", () => setWaterTemperature());

const room = document.getElementById('room');
room.addEventListener("change", () => setWaterTemperature());

function addListenerToPreferment() {
    const preferment = document.getElementById('preferment');
    preferment.addEventListener("change", () => setWaterTemperature());
}
addListenerToPreferment();

const friction = document.getElementById('friction');
friction.addEventListener("change", () => setWaterTemperature());


setWaterTemperature();
