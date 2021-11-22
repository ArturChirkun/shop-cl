import React from "react";

import './custom-button.scss';

const CustomButton = ({children, isSignInWithGoogle, inverted,...otherProps}) => {

    return (
        <button className={`${ inverted ? 'inverted' : ''} 
            ${ isSignInWithGoogle ? 'google' : ''
            } custom-button`} 
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;