import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

const MyAccount = () => {
  const navigate = useNavigate();

  const handleOnNavigate = () => navigate("/new-article");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      MyAccount
      <Button
        label={"New Article"}
        width={"150px"}
        onClickHandler={handleOnNavigate}
      />
    </div>
  );
};

export default MyAccount;
