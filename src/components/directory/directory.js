/* eslint-disable no-useless-constructor */
import React from "react";

import './directory.scss';
import  MenuItem  from "../menu-item/menu-item";

export default class Directory extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map( ({id, ...otherProps}) => ( 
                    <MenuItem  key={id} {...otherProps}/>)
                )}
            </div>
        )
    }
}