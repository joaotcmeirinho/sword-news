import { PropsWithChildren } from "react";
import { BodyContainer } from "./Body.styles";

const Body = ({ children }: PropsWithChildren) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default Body;
