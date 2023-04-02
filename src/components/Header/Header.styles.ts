import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 16px;
  align-items: center;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  background: #d3d3d3;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const MenuSection = styled.p`
  cursor: pointer;
`;
