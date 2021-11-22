import React from "react";

import './sign-up-sign-in.scss';

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignUpSignIn = () => {

    return(
        <div className='sign-up-sign-in'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignUpSignIn;