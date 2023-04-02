import { useCategories } from "../../contexts";
import {
  CategoriesContainer,
  CategoryButton,
  Container,
  Title,
} from "./Categories.styles";

interface CategoriesProps {
  categories: string[];
}

const Categories = ({ categories }: CategoriesProps) => {
  const { filter, setFilter } = useCategories();

  const handleOnClick = (value: string) => {
    setFilter(value);
  };

  const handleOnClear = () => setFilter("");

  return (
    <Container>
      <Title>Categorias</Title>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryButton
            selected={filter === category}
            onClick={() => handleOnClick(category)}
            key={index}
          >
            {category}
          </CategoryButton>
        ))}
        {!!filter && (
          <CategoryButton onClick={handleOnClear}>Clear Filter</CategoryButton>
        )}
      </CategoriesContainer>
    </Container>
  );
};

export default Categories;
