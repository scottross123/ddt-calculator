export const accordion = () => {
    const accordionItems = document.getElementsByClassName('accordion-item');
    console.log('bruh', accordionItems);

    [...accordionItems].map(accordionItem =>
        accordionItem.addEventListener('click', () =>
            accordionItem.classList.toggle('active')
        )
    );
}




