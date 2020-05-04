import React from 'react';
import Square from './components/Square';
import Board from './components/Board';
import Game from './components/Game';
import './App.css';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>React TicTacToe Game</h1>
                <Game />
            </div>
        )
    }
}


export default App;