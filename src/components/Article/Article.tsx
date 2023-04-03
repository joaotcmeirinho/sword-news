import { ArticleModel } from "../../models";
import {
  ArticleImageContainer,
  ArticleInfoContainer,
  Container,
  Description,
  Image,
  Title,
} from "./Article.styles";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useBookmarks, useSession } from "../../contexts";

interface ArticleProps {
  article: ArticleModel;
}

const Article = ({ article }: ArticleProps) => {
  const { id, title, description, image, isDraft } = article;

  const { user } = useSession();

  const { bookmarks, setBookmarks } = useBookmarks();

  const navigate = useNavigate();

  const handleOnPress = () => navigate(`/article/${id}`);

  const handleBookmark = (newArticle: ArticleModel) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, newArticle]);
  };

  const isBookmarked =
    bookmarks.find((bookmarkedArticle) => bookmarkedArticle.id === id) !==
    undefined;

  return (
    <Container>
      <ArticleImageContainer>
        <Image src={image} />
      </ArticleImageContainer>
      <ArticleInfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          width={"100px"}
          onClickHandler={handleOnPress}
          label={"Read more"}
        />
        {user && !isBookmarked && (
          <Button
            label="Bookmark"
            onClickHandler={() => handleBookmark(article)}
            width="100px"
          />
        )}
        {isDraft && "DRAFT"}
      </ArticleInfoContainer>
    </Container>
  );
};

export default Article;
