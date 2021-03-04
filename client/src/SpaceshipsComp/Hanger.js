import React, { useEffect, useState } from "react";
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHanger } from '../redux/actions/hangerActions';
// import { Button } from "@material-ui/core";
import { Col, Row, Container, Button } from 'react-bootstrap';
import HangerTable from './HangerTable';


const Hanger = (props) => {
    const { spacecrafts, handleAddRowOpen, handleDeleteRowOpen } = props

    // const dispatch = useDispatch();
    // const [data, setData] = useState([]);
    // const hangerData = useSelector(state => state.hanger);

    // const spacecrafts = hangerData.hangerData || [];
    // const loading = hangerData.isLoading || null;
    // const error = hangerData.error || null;
    // const [spacecrafts, setSpacecrafts] = useState();

    spacecrafts.length > 0 && console.log(spacecrafts);

    // useEffect(() => {
    //     dispatch(fetchHanger());
    // }, [])
    return (
        <>
            <Container>
                <Row>
                    {spacecrafts.length > 0 && <HangerTable tableData={spacecrafts} />}
                </Row>

                <Row className="justify-content-md-center" style={{ margin: "10px" }}>
                    <Col md="auto">
                        <Button onClick={handleAddRowOpen}>Add Row </Button>
                    </Col>

                    <Col md="auto">
                        <Button onClick={handleDeleteRowOpen}>Delete Row </Button>
                    </Col>

                    <Col md="auto">
                        <Button onClick={handleDeleteRowOpen}>Modify status </Button>
                    </Col>

                </Row>
            </Container>




        </>
    )
}
export default Hanger;