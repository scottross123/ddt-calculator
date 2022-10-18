const calculateWaterTemperature = (
    ddt: number,
    temps: number[],
): number => {
    const multiplicativeFactor = temps.length;
    const totalTempFactor = multiplicativeFactor * ddt;
    const sumOfTemps = temps.reduce(
        (prevTemp, currTemp) => {
            (isNaN(currTemp)) && (currTemp = 0);
            return prevTemp + currTemp;
        }, 0
    );
    return totalTempFactor - sumOfTemps;
}

export const setWaterTemperature = () => {
    const formulaInputs = document.getElementsByClassName('formula-input') as HTMLCollectionOf<HTMLInputElement>;
    const ddt = parseInt((document.getElementById('ddt') as HTMLInputElement)!.value as string);
    const temps = [...formulaInputs].map(formulaInput => parseInt(formulaInput.value));
    const waterTemp = document.getElementById('water-temp');
    waterTemp!.innerHTML = `${calculateWaterTemperature(ddt, temps)}°F`;
}