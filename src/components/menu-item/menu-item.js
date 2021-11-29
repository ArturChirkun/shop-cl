import React from "react";

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from "./menu-item.styles";

import { useNavigate } from "react-router-dom";

const MenuItem = ({title, imageUrl, size, linkUrl}) => {

    const navigate = useNavigate();
    return (
        <MenuItemContainer size={size} onClick={() => navigate(`${linkUrl}`)} >
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
            <ContentContainer>
                <ContentTitle>
                    {title.toUpperCase()}
                </ContentTitle>
                <ContentSubtitle>
                    SHOP CART
                </ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )

}

export default MenuItem;