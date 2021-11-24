/* eslint-disable no-useless-constructor */
import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDiretorySections } from "../redux/directory/directory.selectors";

import './directory.scss';
import  MenuItem  from "../menu-item/menu-item";

const Directory = ({ sections }) =>  {

        return (
            <div className='directory-menu'>
                {sections.map( ({id, ...otherProps}) => ( 
                    <MenuItem  key={id} {...otherProps}/>)
                )}
            </div>
        )

}

const mapStateToProps = createStructuredSelector({
  sections: selectDiretorySections
})


export default connect(mapStateToProps)(Directory);