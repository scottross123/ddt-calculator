export const calculateWaterTemperature = (
    ddt: number,
    temps: number[],
): number => {
    //const formulaInputs = document.getElementsByClassName('formula-input');
    const multiplicativeFactor = temps.length;
    //const ddt = document.getElementById('ddt').value;
    const totalTempFactor = multiplicativeFactor * ddt;
    const sumOfTemps = temps.reduce(
        (prevTemp, currTemp) => {
            (isNaN(currTemp)) && (currTemp = 0);
            return prevTemp + currTemp;
        }, 0
    );
    return totalTempFactor - sumOfTemps;
    //const waterTemp = document.getElementById('water-temp');
    //waterTemp.innerHTML = `${waterTemperature}°F`;
}

// potentially refactor and add arguments to make this function more testable
// remove function side effects