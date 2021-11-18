import React from "react";

import './shop.scss';

import SHOP_DATA from './shop.data'

import CollectionsPreview from "../../components/collections-preview/collections-preview";

export default class Shop extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div>
             {collections.map(({id, ...otherCollectionProps}) => 
                (<CollectionsPreview key={id} {...otherCollectionProps} />))}
            </div>
            )
    }
}