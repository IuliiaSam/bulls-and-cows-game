import { combineReducers } from 'redux';
import generatedNumbers from './generatedNumbersReducer';
import input from './inputReducer';
import history from './historyReducer';

const rootReducer = combineReducers({
    generatedNumbers,
    input,
    history,
})

export default rootReducer;