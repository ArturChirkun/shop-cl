/* eslint-disable no-useless-constructor */
import React from "react";

import { useSelector } from "react-redux";

import { selectDiretorySections } from "../redux/directory/directory.selectors";

import { DirectoryMenuContainer } from "./directory.style";

import  MenuItem  from "../menu-item/menu-item";

const Directory = () =>  {

    const sections = useSelector(selectDiretorySections)

        return (
            <DirectoryMenuContainer>
                {sections.map( ({id, ...otherProps}) => ( 
                    <MenuItem  key={id} {...otherProps}/>)
                )}
            </DirectoryMenuContainer>
        )

}



export default Directory;