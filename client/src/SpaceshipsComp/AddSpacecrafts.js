import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRow } from '../redux/actions/hangerActions';
import { Formik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Form, FormRow, FormGroup, FormLabel, FormControl, Button, Col, InputGroup } from 'react-bootstrap';



const AddSpacecrafts = (props) => {
    const { data } = props;

    const dispatch = useDispatch();
    const [state, setState] = useState([data]);


    // const validationSchema = Yup.object().shape({
    //     id: Yup.number().required().positive().integer(),
    //     name: Yup.string().required(),
    //     modal: Yup.string().required(),
    //     city: Yup.string().required(),
    //     planet: Yup.string().required(),
    //     maxseat: Yup.number().required().positive().integer(),
    //     status: Yup.string().required()


    // });
    const schema = yup.object({
        id: yup.number().required().positive().integer(),
        name: yup.string().required(),
        modal: yup.string().required(),
        city: yup.string().required(),
        planet: yup.string().required(),
        maxseat: yup.number().required().positive().integer(),


    });

    const onSubmit = (values) => {
        let obj = { values }
        axios.post('http://localhost:5000/api/addspaceship', {
            id: values.id, name: values.name, modal: values.modal,
            city: values.city, planet: values.planet, maxseat: values.maxseat,
            status: values.status
        }).then((response) => {
            console.log(response)
        }, (error) => {
            console.log(error)
        }

        )
        // dispatch(addRow(values));
    };



    return (
        <>
            <div>
                <Formik
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    initialValues={{
                        id: '',
                        name: '',
                        modal: '',
                        city: '',
                        planet: '',
                        maxseat: '',
                        status: 'operational',

                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors,
                    }) => {
                        return (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="id"
                                            value={values.id}
                                            onChange={handleChange}
                                            isInvalid={errors.id}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>Modal</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            name="modal"
                                            value={values.modal}
                                            onChange={handleChange}
                                            isInvalid={errors.modal}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.modal}
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="City"
                                            name="city"
                                            value={values.city}
                                            onChange={handleChange}
                                            isInvalid={errors.city}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.city}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>Planet</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            name="planet"
                                            value={values.planet}
                                            onChange={handleChange}
                                            isInvalid={errors.planet}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.planet}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>Maxseat</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder=""
                                            name="maxseat"
                                            value={values.maxseat}
                                            onChange={handleChange}
                                            isInvalid={errors.maxseat}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.maxseat}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group as={Col} md="4" >
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control size="sm" as="select" md="3" name="status" onChange={handleChange} value={values.status}>
                                        <option>operational</option>
                                        <option>maintenance</option>
                                        <option>decommissioned</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>
                        );
                    }}
                </Formik>


            </div>
        </>
    )
}
export default AddSpacecrafts;