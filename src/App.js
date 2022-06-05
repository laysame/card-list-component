import './App.css';
import React, {useState, useEffect} from "react";
import {CardList} from "./components/card-list/CardList";
import {SearchBox} from "./components/search-box/SearchBox";

export default function App() {

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setfilteredMonsters] = useState(monsters);

    useEffect(() => {
        const newfilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        });
        setfilteredMonsters(newfilteredMonsters);
    }, [monsters, searchField])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    function handleChange(event) {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }


    return (
        <div className="App">
            <SearchBox
                placeholder={'Search monsters'}
                handleChange={handleChange}
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}
