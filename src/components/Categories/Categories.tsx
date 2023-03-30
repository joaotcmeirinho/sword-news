import { CategoriesModel } from "../../models";
import {
  CategoriesContainer,
  CategoryButton,
  Container,
  Title,
} from "./Categories.styles";

interface CategoriesProps {
  categories: CategoriesModel[];
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <Container>
      <Title>Categorias</Title>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryButton key={index}>{category}</CategoryButton>
        ))}
      </CategoriesContainer>
    </Container>
  );
};

export default Categories;
