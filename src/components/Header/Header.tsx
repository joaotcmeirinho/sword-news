import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  MenuSection,
} from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();

  const handleOnNavigate = (page: "account" | "bookmarks" | "homepage") => {
    navigate(
      page === "account"
        ? "/my-account"
        : page === "bookmarks"
        ? "/bookmarks"
        : "/"
    );
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => handleOnNavigate("homepage")}>
        Sword Logo
      </LogoContainer>
      <MenuContainer>
        <MenuSection>My Bookmarks</MenuSection>
        <MenuSection onClick={() => handleOnNavigate("account")}>
          My Account
        </MenuSection>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
