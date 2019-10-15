import React, {Component} from 'react';

import './App.css';
import Button from "./Button_Component/Button.js";
import Panel from "./Panel_Component/Panel.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                    <Button label="Klick mich"></Button>
                </div>
                <br></br>
                <Panel title="Überschrift" content="Test"></Panel>
                <br></br>
                <Panel title="Noch eine">
                    <Button label="Klick mich"></Button>
                </Panel>
            </div>
        );
    }
}

export default App;