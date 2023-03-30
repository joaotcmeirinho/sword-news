import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  MenuSection,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>Sword Logo</LogoContainer>
      <MenuContainer>
        <MenuSection>My Bookmarks</MenuSection>
        <MenuSection>My Account</MenuSection>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
