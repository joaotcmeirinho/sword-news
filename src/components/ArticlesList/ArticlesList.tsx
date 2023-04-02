import { ArticleModel } from "../../models";
import Article from "../Article/Article";
import { Container } from "./ArticlesList.styles";

interface ArticlesListProps {
  articlesData: ArticleModel[];
}

const ArticlesList = ({ articlesData }: ArticlesListProps) => {
  return (
    <Container>
      {articlesData.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </Container>
  );
};

export default ArticlesList;
