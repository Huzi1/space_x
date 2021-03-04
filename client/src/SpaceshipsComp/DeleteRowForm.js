import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import { deleteRow } from '../redux/actions/hangerActions';
import * as Yup from "yup";
import { Form, FormRow, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';



const DeleteRowForm = (props) => {
    const { data, onFormDeleteSubmit } = props;
    const dispatch = useDispatch();

    const [state, setState] = useState({ id: "" });
    // const [validated, setValidated] = useState(false);

    // const validationSchema = Yup.object().shape({
    //     id: Yup.string().required()
    // });

    const handleFormDeleteSubmit = (e) => {

        if (state.id != null) {

            dispatch(deleteRow(state.id));

            setState({ id: "" })

            // onFormDeleteSubmit()

        }

    }


    const onSelectChange = (e) => {
        console.log(e.target.value)
        setState({ id: e.target.value })
    }
    let optionItems = data.map((item) => <option key={Math.random()} selected={state.id}>{item.id}</option>)
    return (
        <>
            <div>
                <Form onSubmit={handleFormDeleteSubmit}>

                    <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                        <Form.Label>Select SpaceCraft ID</Form.Label>
                        <Form.Control as="select" value={state.id} custom onChange={onSelectChange}>
                            {optionItems}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>


            </div>
        </>
    )
}
export default DeleteRowForm;