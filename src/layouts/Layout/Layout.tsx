import { Route, Routes } from "react-router-dom";
import { Header, Footer, Body } from "../../components";

import { Homepage } from "../../pages";
import MyAccount from "../../pages/MyAccount/MyAccount";
import NewArticleForm from "../../pages/NewArticleForm/NewArticleForm";
import { LayoutContainer } from "./Layout.styles";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/new-article" element={<NewArticleForm />} />
        </Routes>
      </Body>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
