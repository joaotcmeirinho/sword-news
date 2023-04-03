import styled from "styled-components";

export const ModalBgContainer = styled.div`
  position: fixed;
  background: rgb(128, 128, 128, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 350px;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;
