export const onSubmit = (input, generatedNumbers) => ({
    type: 'SUBMIT',
    payload: {
        inputString: input,
        generatedNumbers,
    }
});