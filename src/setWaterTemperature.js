export const setWaterTemperature = () => {
    const formulaInputs = document.getElementsByClassName('formula-input');
    const multiplicativeFactor = formulaInputs.length;
    const ddt = document.getElementById('ddt').value;
    const totalTempFactor = multiplicativeFactor * ddt;
    const sumOfTemps = [...formulaInputs].reduce(
        (prevTemp, currTemp) => {
            if (currTemp.value === "") currTemp.value = 0;
            return prevTemp + parseInt(currTemp.value);
        }, 0
    );
    const waterTemperature = totalTempFactor - sumOfTemps;
    const waterTemp = document.getElementById('water-temp');
    waterTemp.innerHTML = `${waterTemperature}°F`;
}