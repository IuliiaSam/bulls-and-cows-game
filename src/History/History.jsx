import React from 'react';
import { connect } from 'react-redux';

import './History.css';


const History = ({ history }) => {
    if (history) return (
        <ul className='history-container'>
            {history.map(el => (<li className='history-entry'>{el.userGuess.join(',')}  -  {el.countBulls} bulls, {el.countCows} cows</li>))}
        </ul>
    );
};

function MSTP(state) {
    return {
        history: state.history,
    }
};

export default connect(MSTP, null)(History);