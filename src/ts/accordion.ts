export const accordion = (accordionItems: HTMLCollectionOf<Element>) => {
    //const accordionItems = document.getElementsByClassName('accordion-item');

    // @ts-ignore
    [...accordionItems].map(accordionItem =>
        accordionItem.addEventListener('click', () =>
            accordionItem.classList.toggle('active')
        )
    );
}




