import React from 'react';
import { connect } from 'react-redux';

import './Result.css';


const Result = ({ history }) => {
    return !history.length || history[0].countBulls !== 4 ? null : (
        <div className='result-container'>
            Mooooooo! <span role="img" aria-label="bulls-and-cows">🐂🐂🐂🐂🐄🐄🐄🐄</span>
        </div>
    );
};

function MSTP(state) {
    return {
        history: state.history,
    }
};

export default connect(MSTP, null)(Result);