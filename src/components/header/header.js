import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";

import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import './header.scss';
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({currentUser, hidden}) => {

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
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);