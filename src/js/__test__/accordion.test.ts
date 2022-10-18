import { describe, it } from "vitest";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe.todo('test accordion function', () => {
    const accordion = new JSDOM(`
      <section class="accordion">
        <article class="accordion-item">
            <h4 class="accordion-header">test accordion header</h4>
            <p class="accordion-body">test accordion body</p>
        </article
    `)

    it('test accordion item is set to active', () => {

    });
});