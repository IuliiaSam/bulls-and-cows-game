import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form/Form';
import Result from './Result/Result';
import History from './History/History';
import { generateNumbers } from './redux/actions/generateNumbersAction';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.generateNumbers();
  }

  render() {
    return (
      <div className="app-container">

        <header className="header">
          <p>Bulls and Cows Game</p>
        </header>

        <main className="main">
          <div className="container">
            <h3 className="title">Enter 4 digits from 0 to 9</h3>
            <Form />
            <Result />
            <History />
          </div>
        </main>

        <footer className="footer">
          <p><span role="img" aria-label="sunglasses">🕶️</span></p>
        </footer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    generateNumbers: function () { dispatch(generateNumbers()) },
  }
}

export default connect(null, mapDispatchToProps)(App);
