import React, { useState, useEffect } from 'react';
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from '../util/token'
import { Redirect } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const LoginByGoogle = () => {
    const [redirect, setDirect] = useState(false);
    const { REACT_APP_CLIENT_ID } = process.env
    console.log("in function", process.env.REACT_APP_CLIENT_ID)
    // var clientID;
    // useEffect(() => {
    //     clientID = process.env.CLIENT_ID;
    // }, [])
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        localStorage.setItem("user", res.profileObj.email);
        refreshTokenSetup(res);
        setDirect(true);


    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };


    return (
        <>

            {redirect === true ? <Redirect to="/home" /> : <div>
                <Modal
                    show={true}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered={true}
                    className="special_modal"
                >
                    <Modal.Header style={{

                        justifyContent: "center",
                        alignItems: "center",
                    }} >
                        <Modal.Title id="contained-modal-title-vcenter" >
                            SpaceX Travel
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>

                        <GoogleLogin
                            clientId={REACT_APP_CLIENT_ID}
                            buttonText="Login"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                    </Modal.Body>
                    <Modal.Footer style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        Login with Google
                    </Modal.Footer>
                </Modal>

            </div>}
        </>
    )
}
export default LoginByGoogle;