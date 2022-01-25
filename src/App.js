import './App.css';
import React from "react";
import {CardList} from "./CardList";

class App extends React.Component {
    constructor() {
    super(undefined);

    this.state = {
        monsters: [],
        searchField: ''
    };
}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        return (
            <div className="App">
            <CardList monsters={this.state.monsters} />
            </div>
        )
    }
}

export default App;
