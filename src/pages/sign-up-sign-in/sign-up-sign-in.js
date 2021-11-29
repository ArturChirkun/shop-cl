import React from "react";

import { SignUpSignInContainer } from "./sign-up-sign-in.styles";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignUpSignIn = () => {

    return(
        <SignUpSignInContainer>
            <SignIn />
            <SignUp />
        </SignUpSignInContainer>
    )
}

export default SignUpSignIn;