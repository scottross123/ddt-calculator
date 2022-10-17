import { describe, it, expect } from 'vitest';
import { calculateWaterTemperature } from "../calculateWaterTemperature";

describe('test calculations for water temperature', () => {
   it.each([
       { ddt: 78, temps: [68, 68, 26], expected: 72 },
       { ddt: 78, temps: [68, 68, 70, 26], expected: 80 },
       { ddt: 78, temps: [68, 68, NaN, 26], expected: 150 },
       { ddt: 78, temps: [NaN, NaN, NaN, NaN], expected: 312 },
       { ddt: 0, temps: [NaN, NaN, NaN, NaN], expected: 0 },
   ])('test with $ddt dough temp and $temps other temps, expected to be $expected', ({ ddt, temps, expected }) => {
       console.log(expect.getState().currentTestName);
       const waterTemperature = calculateWaterTemperature(ddt, temps);
       expect(waterTemperature).toBe(expected);
   });
});