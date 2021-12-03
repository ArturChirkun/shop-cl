import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors"

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import CartIcon from "../cart-icon/cart-icon";

import CartDropdown from "../cart-dropdown/cart-dropdown";

import { signOutStart } from "../redux/user/actions";

import { LogoContainer, OptionLink, OptionsContainer, HeaderContainer } from "./header.styles";

const Header = ({currentUser, hidden, signOutStart}) => {

    return (
        <HeaderContainer>
            <LogoContainer to='/' >
                <Logo className='logo'/>
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='shop' > 
                    SHOP 
                </OptionLink>

                <OptionLink to='/' >
                    CONTACTS
                </OptionLink>
                    {
                        currentUser ?
                        <OptionLink as='div'  onClick={signOutStart}>
                            SIGN OUT
                        </OptionLink> :
                        <OptionLink to='signin'  >
                             SIGN IN 
                        </OptionLink>
                    }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())

})
export default connect(mapStateToProps, mapDispatchToProps)(Header);