export const setInputEventListeners = (
    inputs: HTMLCollectionOf<Element>,
    handleChange: () => void
) => {
    [...inputs].map(input =>
        input.addEventListener('change', () => handleChange())
    );
}