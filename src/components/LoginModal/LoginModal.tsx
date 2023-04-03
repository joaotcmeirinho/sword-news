import { useState } from "react";
import {
  InputContainer,
  ModalBgContainer,
  ModalContainer,
  Title,
} from "./LoginModal.styles";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import { useAuth } from "../../services";

interface LoginModalProps {
  onCloseHandler: () => void;
}

const LoginModal = ({ onCloseHandler }: LoginModalProps) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { register, login } = useAuth();

  const handleOnChangeRegisterEmail = (value: string) => {
    setRegisterEmail(value);
  };

  const handleOnChangeRegisterPassword = (value: string) => {
    setRegisterPassword(value);
  };

  const handleOnChangeLoginEmail = (value: string) => {
    setLoginEmail(value);
  };

  const handleOnChangeLoginPassword = (value: string) => {
    setLoginPassword(value);
  };

  const handleRegister = () => {
    register({ email: registerEmail, password: registerPassword });
    onCloseHandler();
  };

  const handleLogin = () => {
    login({ email: loginEmail, password: loginPassword });
    onCloseHandler();
  };

  const handleStopPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <ModalBgContainer onClick={onCloseHandler}>
      <ModalContainer onClick={(e) => handleStopPropagation(e)}>
        <InputContainer>
          <Title>Register</Title>
          <InputText
            value={registerEmail}
            label="E-mail"
            onChangeHandler={(e) => handleOnChangeRegisterEmail(e.target.value)}
            type="email"
          />
          <InputText
            value={registerPassword}
            label="Password"
            onChangeHandler={(e) => {
              handleOnChangeRegisterPassword(e.target.value);
            }}
            type="password"
          />
        </InputContainer>
        <Button
          label="Register"
          onClickHandler={handleRegister}
          width={"100px"}
        />
        <InputContainer>
          <Title>Login</Title>
          <InputText
            value={loginEmail}
            label="E-mail"
            onChangeHandler={(e) => handleOnChangeLoginEmail(e.target.value)}
            type="email"
          />
          <InputText
            value={loginPassword}
            label="Password"
            onChangeHandler={(e) => {
              handleOnChangeLoginPassword(e.target.value);
            }}
            type="password"
          />
        </InputContainer>
        <Button label="Login" onClickHandler={handleLogin} width={"100px"} />
      </ModalContainer>
    </ModalBgContainer>
  );
};

export default LoginModal;
