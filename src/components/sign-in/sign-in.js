/* eslint-disable no-useless-constructor */
import React from "react";

import './sign-in.scss';

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export default  class SignIn extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '', 
                password: ''
            });
        } catch(error) {
            console.log(error);
        }

        this.setState({ email:'', password:''})
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account </h2>
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
                    <div className='buttons'>
                        <CustomButton type='submit' > sign in </CustomButton>
                        <CustomButton type='submit' onClick={signInWithGoogle} isSignInWithGoogle> sign in with google </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}