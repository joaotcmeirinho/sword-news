import { ArticleModel } from "../../models";
import {
  ArticleImageContainer,
  ArticleInfoContainer,
  Container,
  Description,
  Image,
  Title,
} from "./HighlightedArticle.styles";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

interface HighlightedArticleProps {
  article: ArticleModel;
}

const HighlightedArticle = ({ article }: HighlightedArticleProps) => {
  const { id, title, description, image } = article;

  const navigate = useNavigate();

  const handleOnPress = () => navigate(`/article/${id}`);

  return (
    <Container>
      <ArticleInfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          width={"150px"}
          label={"Read more"}
          onClickHandler={handleOnPress}
        />
      </ArticleInfoContainer>
      <ArticleImageContainer>
        <Image src={image} />
      </ArticleImageContainer>
    </Container>
  );
};

export default HighlightedArticle;
