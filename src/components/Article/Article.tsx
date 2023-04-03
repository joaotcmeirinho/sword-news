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

interface ArticleProps {
  article: ArticleModel;
}

const Article = ({ article }: ArticleProps) => {
  const { id, title, description, image } = article;

  const navigate = useNavigate();

  const handleOnPress = () => navigate(`/article/${id}`);

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
      </ArticleInfoContainer>
    </Container>
  );
};

export default Article;
