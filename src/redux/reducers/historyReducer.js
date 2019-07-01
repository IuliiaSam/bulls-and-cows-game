function history(state = [], action) {
    switch (action.type) {
        case 'SUBMIT':
            const generatedNumbers = action.payload.generatedNumbers;
            const userGuess = action.payload.inputString
                .split('')
                .map(el => Number(el));
            let countBulls = 0;
            let countCows = 0;
            for (let i = 0; i < 4; i++) {
                if (userGuess[i] === generatedNumbers[i]) {
                    countBulls++;
                } else if (generatedNumbers.includes(userGuess[i])) {
                    countCows++;
                }
            }
            const newEntry = { userGuess, countBulls, countCows };
            return [newEntry, ...state]
        default:
            return state
    }
}

export default history;