import { Route, Routes } from "react-router-dom";
import { Header, Footer, Body } from "../../components";

import { Article, Homepage, MyAccount, NewArticleForm } from "../../pages";
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
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </Body>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
