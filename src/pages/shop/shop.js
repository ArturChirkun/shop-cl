import React from "react";

import './shop.scss';

import { Route, Routes, } from "react-router-dom";


import  CollectionsOverview  from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

export const Shop = () =>   {

        return (
            <div>
                <Routes>
                <Route path='' element={ <CollectionsOverview />} />
                <Route path=':collectionId' element={ <Collection />} />
                </Routes>
            </div>
            )
    
}


export default Shop;