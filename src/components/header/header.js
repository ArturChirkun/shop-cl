import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import './header.scss';

const Header = ({currentUser}) => {

    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>

            <div className='options'>
                <Link to='/shop' className='option'> 
                    SHOP 
                </Link>

                <Link to='/' className='option'>
                    CONTACTS
                </Link>

                <div>
                    {
                        currentUser ?
                        <Link to='/signin' className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </Link> :
                        <Link to='/signin' className='option' >
                             SIGN IN 
                        </Link>
                    }
                </div>
 
            </div>

        </div>
    )
}

export default Header;