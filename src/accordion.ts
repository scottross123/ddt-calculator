export const accordion = () => {
    //const accordionItems = document.getElementsByClassName('accordion-item');

    [...accordionItems].map(accordionItem =>
        accordionItem.addEventListener('click', () =>
            accordionItem.classList.toggle('active')
        )
    );
}




