import styled, { css } from "styled-components";

const googleButtonStyles = css`
        background-color: #4285F4;
        color: white;

        &:hover {
        background-color: #357ae8;
        }
`;

const invertedButtonStyles = css`
        background-color: white;
        color: black;
        border: 1px solid black;

        &:hover {
        background-color: black;
        color: white;
        border: none;
        }
`;

const buttonStyles = `
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        }
`;

const getButtons = props => {

    if(props.isSignInWithGoogle) {
        return googleButtonStyles;
    }
    return (
        props.inverted ? invertedButtonStyles : buttonStyles
    )

}

export const CustomButtonStyles = styled.button`

    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtons}

`;