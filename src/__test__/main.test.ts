import {beforeEach, describe, expect, it} from 'vitest';
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

// @vitest-environment jsdom
describe('test script', () => {

    beforeEach(() => {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'preferment-checkbox')
        document.body.appendChild(checkbox);
    })

    it('test if preferment-checkbox exists', () => {
        const element = document.getElementById("preferment-checkbox");
        expect(element).not.toBeNull();
    })
})