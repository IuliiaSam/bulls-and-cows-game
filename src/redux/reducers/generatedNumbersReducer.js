function generatedNumbers(state = [], action) {
    switch (action.type) {
        case 'GENERATE_NUMBERS':
            const newState = [];
            while (newState.length < 4) {
                const newNumber = Math.floor(Math.random() * 10);
                if (!newState.includes(newNumber)) { newState.push(newNumber) };
            };
            return [...newState]
        default:
            return state
    }
}

export default generatedNumbers;