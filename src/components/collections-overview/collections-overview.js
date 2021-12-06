import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsForPreview } from "../../components/redux/shop/shop.selectors";

import { CollectionsOverviewContainer } from "./collections-overview.styles";


import CollectionsPreview from "../../components/collections-preview/collections-preview";

export const CollectionsOverview = ({ collections }) =>   {
        return (
            <CollectionsOverviewContainer>
             {collections.map(({id, ...otherCollectionProps}) => 
                (<CollectionsPreview key={id} {...otherCollectionProps} />))}
            </CollectionsOverviewContainer>
            )
    
}

const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)