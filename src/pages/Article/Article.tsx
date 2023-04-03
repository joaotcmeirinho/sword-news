import { useNavigate, useParams } from "react-router-dom";
import { useArticles, useSession } from "../../contexts";
import { Button } from "../../components";

const Article = () => {
  const { articles } = useArticles();

  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useSession();

  const article = articles.find((article) => article.id === id);

  const isUserAuthor = article?.authorId === user?.userId;

  const handleNavigate = () => navigate("/new-article", { state: article });

  return (
    <div>
      {article?.image}
      {article?.title}
      {article?.content}
      {isUserAuthor && (
        <Button onClickHandler={handleNavigate} label="Edit" width="100px" />
      )}
    </div>
  );
};

export default Article;
