export const accordion = (accordionItems: HTMLCollectionOf<Element>) => {
    [...accordionItems].map(accordionItem =>
        accordionItem.addEventListener('click', () =>
            accordionItem.classList.toggle('active')
        )
    );
}




