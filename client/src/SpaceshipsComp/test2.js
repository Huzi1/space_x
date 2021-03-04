<Formik
                    validationSchema={validationSchema}
                    onSubmit={onSuccess}
                    initialValues={{
                        id: '',
                        name: '',
                        modal: '',
                        city: '',
                        planet: '',
                        maxseat: '',
                        status: '',
                    }}
                >
                    {({
                        isSubmitting,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="4" >
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="id"
                                        value={values.id}
                                        onChange={handleChange}
                                        isValid={touched.id && !errors.id}
                                    />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="4" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                    />

                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="4" >
                                    <Form.Label>Modal</Form.Label>
                                    <InputGroup hasValidation>

                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            name="modal"
                                            value={values.modal}
                                            onChange={handleChange}
                                            isInvalid={!!errors.modal}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.modal}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6" >
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        isInvalid={!!errors.city}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" >
                                    <Form.Label>Planet</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="planet"
                                        value={values.planet}
                                        onChange={handleChange}
                                        isInvalid={!!errors.planet}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.planet}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" >
                                    <Form.Label>Maxseat</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder=""
                                        name="maxseat"
                                        value={values.maxseat}
                                        onChange={handleChange}
                                        isInvalid={!!errors.maxseat}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.maxseat}
                                    </Form.Control.Feedback>


                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label column sm="2" >Status</Form.Label>
                                        <Form.Control size="sm" as="select" md="3" >
                                            <option>operational</option>
                                            <option>maintenance</option>
                                            <option>decommissioned</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>
                            <Button type="submit" onClick={console.log("CLickkked!!")} disabled={isSubmitting}>Submit form</Button>
                        </Form>
                    )}
                </Formik>