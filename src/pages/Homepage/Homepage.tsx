import {
  ArticlesList,
  Button,
  Categories,
  HighlightedArticle,
} from "../../components";
import { useArticles } from "../../contexts";
import { articleCategories, highlightedArticle } from "../../data";

const Homepage = () => {
  const { loadQuantity, setLoadQuantity, articlesLoaded, articles } =
    useArticles();

  const hasNextItems = loadQuantity < articles.length;

  const handleLoadMore = () => {
    setLoadQuantity((prevQuantity) => prevQuantity + 8);
  };

  return (
    <>
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
    </>
  );
};

export default Homepage;
