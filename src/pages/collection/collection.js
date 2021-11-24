import React from "react";

import { useSelector } from "react-redux";

import { selectShopCollection } from "../../components/redux/shop/shop.selectors";
import './collection.scss';

import CollectionItem from "../../components/collection-item/collection-item";

import { useParams } from "react-router";

const Collection = () => {

    const { collectionId } = useParams(); 
    const collection = useSelector(state => selectShopCollection(collectionId)(state));



    return (
        <div className='collection-page'>
            <h2 className='title'>
                {collection.title}
            </h2>
            <div className='items'>
                {collection.items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}




export default Collection;