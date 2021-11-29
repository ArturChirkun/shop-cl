import React from "react";

import { CollectionsPreviewContainer, TittleContainer, PreviewContainer } from "./collections-preview.styles";

import CollectionItem from "../collection-item/collection-item";

const CollectionsPreview = ({title, items}) => {

    return (
        <CollectionsPreviewContainer>
            <TittleContainer> {title.toUpperCase()}</TittleContainer>
            <PreviewContainer>
            {items
            .filter((item,idx) => idx < 4 )
            .map((item) => (
                    <CollectionItem  key={item.id} item={item} />  ))}
            </PreviewContainer>

        </CollectionsPreviewContainer>
    )
}

export default CollectionsPreview;