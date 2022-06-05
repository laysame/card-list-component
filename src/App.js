import './App.css';
import React from "react";
import {CardList} from "./components/card-list/CardList";
import {SearchBox} from "./components/search-box/SearchBox";

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
            .then(users => this.setState(
                () => {
                    return {monsters: users}
                }
            ));
    }

    handleChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField}
        })

    }

    render() {
        const {monsters, searchField} = this.state;
        const {handleChange} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        });

        return (
            <div className="App">
                <SearchBox
                    placeholder={'Search monsters'}
                    handleChange={handleChange}
                />
                <CardList monsters = {filteredMonsters}/>
            </div>
        )
    }
}

export default App;
