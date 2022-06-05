import React from "react";
import './SearchBox.css';
import "react-bootstrap/dist/react-bootstrap.min.js"
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


export default function SearchBox({placeholder, handleChange}) {
    return (
        <div className={'Search-box'}>
            <Container fluid>
                <Row>
                    <Col className="col-12 m-5">
                        <input type="search" placeholder={placeholder} onChange={handleChange}
                               className="w-50 p-2"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

