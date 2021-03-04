import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Hanger from '../SpaceshipsComp/Hanger'
import { useSelector, useDispatch } from 'react-redux';
import { fetchHanger } from '../redux/actions/hangerActions';
import axios from "axios";
import { Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import DeleteRowForm from '../SpaceshipsComp/DeleteRowForm';
import AddSpacecrafts from '../SpaceshipsComp/AddSpacecrafts';


const Home = () => {
    const dispatch = useDispatch();
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showModify, setShowModify] = useState(false);
    const hangerData = useSelector(state => state.hanger);
    const spacecrafts = hangerData.hangerData || [];
    const loading = hangerData.isLoading || null;
    const error = hangerData.error || null;
    // const [stateChanged, setStateChanged] = useState(false)
    spacecrafts.length > 0 && console.log(spacecrafts);

    useEffect(() => {

        dispatch(fetchHanger());




    }, [])
    const handleAddClose = () => setShowAdd(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleModifyClose = () => setShowModify(false);


    const handleAddRowOpen = () => { setShowAdd(true) }
    const handleDeleteRowOpen = () => { setShowDelete(true) }
    const handleModifyOpen = () => { setShowModify(true) }

    return (
        <>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "inherit" }}>
                <Row>
                    {spacecrafts.length > 0 && <Hanger spacecrafts={spacecrafts} handleAddRowOpen={handleAddRowOpen} handleDeleteRowOpen={handleDeleteRowOpen} />}
                </Row>


            </div>
            <div id="AddRowForm">
                <Modal show={showAdd} onHide={handleAddClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Row Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddSpacecrafts data={spacecrafts} />

                    </Modal.Body>

                </Modal>
            </div>
            <div id="Delete Row Form">
                <Modal show={showDelete} onHide={handleDeleteClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Row Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DeleteRowForm data={spacecrafts} />
                    </Modal.Body >
                </Modal>
            </div>
        </>
    )
}
export default Home;