import { ButtonComponent } from "./Button.styles";

interface ButtonProps {
  label: string;
  onClickHandler: () => void;
  width: string;
}

const Button = ({ label, onClickHandler, width }: ButtonProps) => {
  return (
    <ButtonComponent width={width} onClick={onClickHandler}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
