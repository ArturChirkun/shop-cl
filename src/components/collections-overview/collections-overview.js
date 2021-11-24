import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectShopCollectionsForPreview } from "../../components/redux/shop/shop.selectors";

import './collections-overview.scss';


import CollectionsPreview from "../../components/collections-preview/collections-preview";

export const CollectionsOverview = ({ collections }) =>   {
        return (
            <div className='collections-overview'>
             {collections.map(({id, ...otherCollectionProps}) => 
                (<CollectionsPreview key={id} {...otherCollectionProps} />))}
            </div>
            )
    
}

const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)