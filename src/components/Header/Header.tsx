import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  MenuSection,
} from "./Header.styles";
import { LoginModal } from "../../components";
import { useSession } from "../../contexts";

const Header = () => {
  const navigate = useNavigate();

  const { user } = useSession();

  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleModal = () => {
    setShowLoginModal((prevState) => !prevState);
  };

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
      {showLoginModal && <LoginModal onCloseHandler={toggleModal} />}
      <LogoContainer onClick={() => handleOnNavigate("homepage")}>
        Sword Logo
      </LogoContainer>
      <MenuContainer>
        {user && (
          <MenuSection onClick={() => handleOnNavigate("bookmarks")}>
            My Bookmarks
          </MenuSection>
        )}{" "}
        <MenuSection
          onClick={user ? () => handleOnNavigate("account") : toggleModal}
        >
          {user ? "My Account" : "Login"}{" "}
        </MenuSection>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
