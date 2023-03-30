import styled from "styled-components";

interface BtnProps {
  width: string;
}

export const ButtonComponent = styled.button<BtnProps>`
  background-color: blue;
  color: white;
  font-family: "Kanit", sans-serif;
  border-radius: 3px;
  border: none;
  box-sizing: border-box;
  width: ${({ width }) => width};
  padding: 8px 12px;
  cursor: pointer;
`;
