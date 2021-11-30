import React from "react";

import './shop.scss';

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";


import  CollectionsOverview  from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import { convertSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../components/redux/shop/actions";

class Shop extends React.Component   {

    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.get().then ((snapshot) => {
           const collectionsMap = convertSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
        });
    }

    render() {
        return (
            <div>
                <Routes>
                <Route path='' element={ <CollectionsOverview />} />
                <Route path=':collectionId' element={ <CollectionPage />} />
                </Routes>
            </div>
            )
    }

}

const mapDispatchToProps = (dispatch) => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);