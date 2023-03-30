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

interface ArticleProps {
  article: ArticleModel;
}

const Article = ({ article }: ArticleProps) => {
  const { title, description, image } = article;

  return (
    <Container>
      <ArticleImageContainer>
        <Image src={image} />
      </ArticleImageContainer>
      <ArticleInfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button width={"100px"} onClickHandler={() => {}} label={"Read more"} />
      </ArticleInfoContainer>
    </Container>
  );
};

export default Article;
