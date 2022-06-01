import './App.css';
import React from "react";
import {CardList} from "./CardList";
import {SearchBox} from "./SearchBox";

class App extends React.Component {
    constructor() {
        super(undefined);

        this.state = {
            monsters: [],
        };

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(
                () => {
                    return {monsters: users}
                }
            ));
    }

    handleChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchString)
        });

        this.setState(() => {
            return {monsters: filteredMonsters}
        })

    }

    render() {
        //const {monsters, searchField} = this.state;

        return (
            <div className="App">
                <SearchBox
                    placeholder={'Search monsters'}
                    handleChange={this.handleChange}
                />
                <CardList />
            </div>
        )
    }
}

export default App;
