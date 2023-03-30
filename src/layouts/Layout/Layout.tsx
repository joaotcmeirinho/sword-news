import { useState } from "react";
import {
  Header,
  Footer,
  Body,
  HighlightedArticle,
  Categories,
  ArticlesList,
  Button,
} from "../../components";
import {
  highlightedArticle,
  articleCategories,
  articlesData,
} from "../../data";
import { LayoutContainer } from "./Layout.styles";

const Layout = () => {
  const [loadQuantity, setLoadQuantity] = useState(8);

  const hasNextItems = loadQuantity < articlesData.length;

  const articlesLoaded = articlesData.slice(0, loadQuantity);

  const handleLoadMore = () => {
    setLoadQuantity((prevQuantity) => prevQuantity + 8);
  };

  return (
    <LayoutContainer>
      <Header />
      <Body>
        <HighlightedArticle article={highlightedArticle} />
        <Categories categories={articleCategories} />
        <ArticlesList articlesData={articlesLoaded} />
        {hasNextItems && (
          <Button
            label={"Load more"}
            width={"150px"}
            onClickHandler={handleLoadMore}
          />
        )}
      </Body>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
