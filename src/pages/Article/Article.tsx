import { useParams } from "react-router-dom";
import { useArticles } from "../../contexts";

const Article = () => {
  const { articles } = useArticles();

  const { id } = useParams();

  const article = articles.find((article) => article.id === id);

  return (
    <div>
      {article?.image}
      {article?.title}
      {article?.content}
    </div>
  );
};

export default Article;
