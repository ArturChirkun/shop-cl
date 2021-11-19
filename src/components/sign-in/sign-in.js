/* eslint-disable no-useless-constructor */
import React from "react";

import './sign-in.scss';

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from "../firebase/firebase.utils";

export default  class SignUp extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

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

                    <CustomButton type='submit' > sign in </CustomButton>
                    <CustomButton type='submit' onClick={signInWithGoogle}> sign in with google </CustomButton>
                </form>
            </div>
        )
    }
}