import React from "react";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/cart/actions";

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';

const CollectionItem = ({ item }) => {

    const dispatch = useDispatch();

    const { imageUrl, name, price} = item;
    
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>

            <CollectionFooterContainer>
                <NameContainer> {name} </NameContainer>
                <PriceContainer> {price} </PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => dispatch(addItem(item))}> Add to cart </AddButton>
        </CollectionItemContainer>
    )
}



export default CollectionItem;