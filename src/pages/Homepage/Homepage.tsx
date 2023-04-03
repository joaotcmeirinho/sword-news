import {
  ArticlesList,
  Button,
  Categories,
  HighlightedArticle,
} from "../../components";
import { useArticles, useSession } from "../../contexts";
import { articleCategories } from "../../data";

const Homepage = () => {
  const { loadQuantity, setLoadQuantity, articles } = useArticles();
  const { user } = useSession();

  const hasNextItems = loadQuantity < articles.length;

  const handleLoadMore = () => {
    setLoadQuantity((prevQuantity) => prevQuantity + 8);
  };

  const highlightedArticle = articles.find((article) => article.isHighlighted);

  const isAdmin = !!user && user.role === "admin";

  const userArticles = articles.filter((article) => {
    const isAuthor = user?.userId === article.authorId;
    return (isAuthor && article.isDraft) || !article.isDraft;
  });

  const articlesList = isAdmin ? articles : userArticles;

  const articlesLoaded = articlesList.slice(0, loadQuantity);

  return (
    <>
      {highlightedArticle && (
        <HighlightedArticle article={highlightedArticle} />
      )}
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
