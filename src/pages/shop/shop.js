import React, { useEffect } from "react";

import './shop.scss';

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchingStart } from "../../components/redux/shop/actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";


const Shop = () =>   {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchingStart());
    }, [dispatch])

    
        return (
            <div>
                <Routes>
                <Route path='' element={<CollectionsOverviewContainer />} />
                <Route path=':collectionId' element={<CollectionPageContainer />} />
                </Routes>
            </div>
            )
    }


export default Shop;