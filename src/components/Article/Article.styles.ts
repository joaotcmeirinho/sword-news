import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
`;

export const ArticleInfoContainer = styled.div`
  width: 50%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ArticleImageContainer = styled.div`
  width: 50%;
  max-width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
