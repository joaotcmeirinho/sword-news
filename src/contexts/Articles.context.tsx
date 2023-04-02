import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ArticleModel } from "../models";
import { useCategories } from "../contexts";
import { articlesData } from "../data";

interface ArticlesContextModel {
  articles: ArticleModel[];
  setArticles: React.Dispatch<React.SetStateAction<ArticleModel[]>>;
  articlesLoaded: ArticleModel[];
  loadQuantity: number;
  setLoadQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const ArticlesContext = createContext<ArticlesContextModel>(
  {} as ArticlesContextModel
);

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  return context;
};

const saved = localStorage.getItem("articles");
const initialValue = JSON.parse(saved || "[]");

const ArticlesProvider = ({ children }: PropsWithChildren) => {
  const [loadQuantity, setLoadQuantity] = useState(8);

  const [articles, setArticles] = useState<ArticleModel[]>(
    initialValue || articlesData
  );

  const [filteredArticles, setFilteredArticles] = useState<ArticleModel[]>([]);

  const { filter } = useCategories();

  useEffect(() => {
    localStorage.setItem(
      "articles",
      JSON.stringify(!!articles.length ? articles : articlesData)
    );
  }, [articles]);

  useEffect(() => {
    if (!!filter) {
      const filteredByCategory = articles.filter(
        (article) => article.category === filter
      );
      setFilteredArticles(filteredByCategory);
    }
  }, [articles, filter]);

  const articlesLoaded = !!filter
    ? filteredArticles?.slice(0, loadQuantity)
    : articles.slice(0, loadQuantity);

  return (
    <ArticlesContext.Provider
      value={{
        articles: !!filter ? filteredArticles : articles,
        setArticles,
        articlesLoaded,
        loadQuantity,
        setLoadQuantity,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
