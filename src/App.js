import React, { Component } from 'react';
import './App.css';

import CircleSelector from './CircleSelector'
import Circles from './Circles'

class App extends Component {

    state = {
        circleArr: [1, 0, 0, 0]
    }

    handleButtonClick = (idx) => {
        const arr = this.state.circleArr.map(el => 0)
        arr[idx] = 1
        this.setState({
           circleArr: arr 
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
                <main>
                    <CircleSelector 
                        circleArr={this.state.circleArr}
                        handleButtonClick={this.handleButtonClick}
                    />
                    <Circles 
                        circleArr={this.state.circleArr}
                    />
                </main>
            </div>
        );
    }
}

export default App;