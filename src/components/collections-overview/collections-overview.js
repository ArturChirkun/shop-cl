import React from "react";

import { useSelector } from "react-redux";

import { selectShopCollectionsForPreview } from "../../components/redux/shop/shop.selectors";

import { CollectionsOverviewContainer } from "./collections-overview.styles";


import CollectionsPreview from "../../components/collections-preview/collections-preview";

export const CollectionsOverview = () =>   {

    const collections = useSelector(selectShopCollectionsForPreview);
        return (
            <CollectionsOverviewContainer>
             {collections.map(({id, ...otherCollectionProps}) => 
                (<CollectionsPreview key={id} {...otherCollectionProps} />))}
            </CollectionsOverviewContainer>
            )
    
}



export default CollectionsOverview;