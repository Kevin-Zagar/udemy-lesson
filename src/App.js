import React, {Component} from 'react';
import Button from "./Button_Component/Button.js";
import Panel from "./Panel_Component/Panel.js";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Ligma",
            content: "Joe",
            changingTitle: "Welt"
        }

        setTimeout(() => {
            this.setState({name: "Balls", content: "Mama"})
        }, 3000);

        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({changingTitle: "Venus"})
    }

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
                    <button label="Klick mich"></button>
                </Panel>
                <Panel title={this.state.name} content={this.state.content}></Panel>
                <h2>Hallo {this.state.changingTitle}</h2>
                <button onClick={this.changeName}>Verändere den Namen</button>
            </div>
        );
    }
}

export default App;