/* eslint-disable no-useless-constructor */
import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDiretorySections } from "../redux/directory/directory.selectors";

import { DirectoryMenuContainer } from "./directory.style";

import  MenuItem  from "../menu-item/menu-item";

const Directory = ({ sections }) =>  {

        return (
            <DirectoryMenuContainer>
                {sections.map( ({id, ...otherProps}) => ( 
                    <MenuItem  key={id} {...otherProps}/>)
                )}
            </DirectoryMenuContainer>
        )

}

const mapStateToProps = createStructuredSelector({
  sections: selectDiretorySections
})


export default connect(mapStateToProps)(Directory);