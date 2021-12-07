import React, { useEffect } from "react";

import './shop.scss';

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchingStart } from "../../components/redux/shop/actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";


const Shop = ({ fetchingStart }) =>   {

    useEffect(() => {
        fetchingStart();
    }, [fetchingStart])

    
        return (
            <div>
                <Routes>
                <Route path='' element={<CollectionsOverviewContainer />} />
                <Route path=':collectionId' element={<CollectionPageContainer />} />
                </Routes>
            </div>
            )
    }





const mapDispatchToProps = (dispatch) => ({
    fetchingStart: () => dispatch(fetchingStart())
})

export default connect(null, mapDispatchToProps)(Shop);