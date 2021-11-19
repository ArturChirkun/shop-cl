import React from "react";

import './custom-button.scss';

const CustomButton = ({children, isSignInWithGoogle,...otherProps}) => {

    return (
        <button className={`${ isSignInWithGoogle ? 'google' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;