import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { createUserProfileDocument, auth } from "../../firebase/firebase.utils";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

export default class SignUp extends React.Component {

    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Password and confirm password do not match')
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user,{displayName});

            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }

        } catch(error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }
    render() {

        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <SignUpContainer>
                <SignUpTitle>
                    I do not have an account
                </SignUpTitle>

                <form className ='form-sign-up' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='display name'
                    required
                    onChange={this.handleChange}
                    />

                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label='email'
                    required
                    onChange={this.handleChange}
                    />

                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label='password'
                    required
                    onChange={this.handleChange}
                    />

                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='confirm password'
                    required
                    onChange={this.handleChange}
                    />

                    <CustomButton type='submit' > Sign Up</CustomButton>
                </form>

            </SignUpContainer>
        )
    }
}