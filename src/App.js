import './App.css';
import React from "react";
import {CardList} from "./CardList";
import {Col, Container, Row} from "react-bootstrap";

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
        const { monsters,  searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <Container fluid>
                    <Row>
                        <Col className="m-5">
                            <input type="search" placeholder={'Search a monster'} onChange={e => {
                                this.setState({searchField: e.target.value}, () => console.log(this.state))
                            }}/>
                        </Col>
                    </Row>
                </Container>

                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
