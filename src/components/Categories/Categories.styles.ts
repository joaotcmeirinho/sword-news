import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 48px;
  align-items: center;
  margin: 48px;
`;

export const Title = styled.p`
  font-size: 24px;
  margin: 0;
  margin-left: 48px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 16px;
`;

interface BtnProps {
  selected?: boolean;
}

export const CategoryButton = styled.button<BtnProps>`
  cursor: pointer;
  width: 100px;
  box-sizing: border-box;
  padding: 12px 8px;
  border-radius: 20px;
  border: 1px solid black;
  color: ${({ selected }) => (selected ? "white" : "black")};
  background-color: ${({ selected }) => (selected ? "black" : "white")};
`;
