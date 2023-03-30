import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 48px;
  gap: 16px;
  align-items: flex-start;
`;

export const ArticleInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;
export const ArticleImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
`;

export const Description = styled.p`
  font-size: 25px;
  font-weight: 100;
  margin: 0;
`;

export const Image = styled.img`
  width: 100%;
  /* border: 1px solid black; */
`;
