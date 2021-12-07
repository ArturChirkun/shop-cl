/* eslint-disable no-useless-constructor */
import React, { useState } from "react";

import { SignInContainer, ButtonsContainer, SignInTitle } from "./sign-in-styles";

import { connect } from "react-redux";

import { emailSignInStart, googleSignInStart } from "../redux/user/actions";

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';



const SignIn = ({ emailSignInStart, signInWithGoogle }) => {

const [userCredentials, setUserCredentials] = useState({email: '',password:''})

const {email, password} = userCredentials;

const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

const handleChange = (event) => {
        const { name, value} = event.target;
        setUserCredentials({ ...userCredentials, [name]: value})
    }


        return (
            <SignInContainer>
                <SignInTitle> I already have an account </SignInTitle>
                <p> Sign in with your email and password</p>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        value={email} 
                        required 
                        handleChange={handleChange}/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={password} 
                        required
                        handleChange={handleChange}
                        />
                    <ButtonsContainer>
                        <CustomButton type='submit' > sign in </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isSignInWithGoogle> sign in with google </CustomButton>
                    </ButtonsContainer>

                </form>
            </SignInContainer>
        )
    }


const mapDispatchToProps = (dispatch) => ({
    signInWithGoogle: ()=> dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)