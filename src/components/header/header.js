import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectCartHidden } from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors";

import { signOutStart } from "../redux/user/actions";

import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import CartIcon from "../cart-icon/cart-icon";

import CartDropdown from "../cart-dropdown/cart-dropdown";

import { LogoContainer, OptionLink, OptionsContainer, HeaderContainer } from "./header.styles";

const Header = () => {

    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);

    const dispatch = useDispatch();

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
                        <OptionLink as='div'  onClick={() => dispatch(signOutStart())}>
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


export default Header;