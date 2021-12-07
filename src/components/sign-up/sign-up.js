import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";


import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import { signUpStart } from "../redux/user/actions";

const SignUp = ({ signUpStart}) =>  {

const [userCredentials, setUserCredentials] = useState({ 
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const {displayName, email, password, confirmPassword} = userCredentials;

const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password and confirm password do not match')
            return;
        }

        signUpStart({ displayName, email, password});
    }

const handleChange = (event) => {
        const {name, value} = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }


        return(
            <SignUpContainer>
                <SignUpTitle>
                    I do not have an account
                </SignUpTitle>

                <form className ='form-sign-up' onSubmit={handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='display name'
                    required
                    onChange={handleChange}
                    />

                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label='email'
                    required
                    onChange={handleChange}
                    />

                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label='password'
                    required
                    onChange={handleChange}
                    />

                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='confirm password'
                    required
                    onChange={handleChange}
                    />

                    <CustomButton type='submit' > Sign Up</CustomButton>
                </form>

            </SignUpContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);