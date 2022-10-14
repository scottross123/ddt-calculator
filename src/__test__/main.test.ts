import {  describe, expect, it } from 'vitest';
import { renderPreferment } from "../main";
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

// @vitest-environment jsdom
describe('test script', () => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'preferment-checkbox');
    checkbox.addEventListener('click', renderPreferment);
    document.body.appendChild(checkbox);

    const prefermentCheckbox = document.getElementById("preferment-checkbox");

    it('test if preferment-checkbox exists', () => {
        expect(prefermentCheckbox).not.toBeNull();
    });

    it('test if function renders label and input', () => {
        const form = document.createElement('form');
        const waterLabel = document.createElement('label');
        waterLabel.setAttribute('id', 'water-label');
        form.appendChild(waterLabel);
        document.body.appendChild(form);
        renderPreferment();
        const input = document.getElementById("preferment");
        expect(input).not.toBeNull();
    });

    it.todo('test if preferment input is rendered if checkbox is checked', () => {
        prefermentCheckbox!.click();
        const preferment = document.getElementById("preferment");
        expect(preferment).not.toBeNull();
    })

});