/* eslint-disable no-useless-constructor */
import React from "react";

import { SignInContainer, ButtonsContainer, SignInTitle } from "./sign-in-styles";

import { connect } from "react-redux";

import { emailSignInStart, googleSignInStart } from "../redux/user/actions";

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';



class SignIn extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { emailSignInStart } = this.props
        const {email, password} = this.state;
        emailSignInStart(email, password);
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {

        const { signInWithGoogle} = this.props;
        return (
            <SignInContainer>
                <SignInTitle> I already have an account </SignInTitle>
                <p> Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        />
                    <ButtonsContainer>
                        <CustomButton type='submit' > sign in </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isSignInWithGoogle> sign in with google </CustomButton>
                    </ButtonsContainer>

                </form>
            </SignInContainer>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    signInWithGoogle: ()=> dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)