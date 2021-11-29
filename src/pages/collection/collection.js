import React from "react";

import { useSelector } from "react-redux";

import { selectShopCollection } from "../../components/redux/shop/shop.selectors";

import { CollectionPageContainer, TitleContainer, ItemsContainer } from "./collection.styles";

import CollectionItem from "../../components/collection-item/collection-item";

import { useParams } from "react-router";

const Collection = () => {

    const { collectionId } = useParams(); 
    const collection = useSelector(state => selectShopCollection(collectionId)(state));



    return (
        <CollectionPageContainer>
            <TitleContainer>
                {collection.title}
            </TitleContainer>
            <ItemsContainer>
                {collection.items.map(item => <CollectionItem key={item.id} item={item} />)}
            </ItemsContainer>
        </CollectionPageContainer>
    )
}




export default Collection;