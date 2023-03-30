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

interface HighlightedArticleProps {
  article: ArticleModel;
}

const HighlightedArticle = ({ article }: HighlightedArticleProps) => {
  const { title, description, image } = article;

  return (
    <Container>
      <ArticleInfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button width={"150px"} label={"Read more"} onClickHandler={() => {}} />
      </ArticleInfoContainer>
      <ArticleImageContainer>
        <Image src={image} />
      </ArticleImageContainer>
    </Container>
  );
};

export default HighlightedArticle;
