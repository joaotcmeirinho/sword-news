import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useSession } from "../../contexts";
import { signOut } from "firebase/auth";
import { auth } from "../../configs";

const MyAccount = () => {
  const navigate = useNavigate();

  const handleOnNavigate = () => navigate("/new-article");

  const { user } = useSession();

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {!!user && `Logged user: ${user?.email}`}{" "}
      <Button
        label={"New Article"}
        width={"150px"}
        onClickHandler={handleOnNavigate}
      />
      <Button label={"Log out"} width={"100px"} onClickHandler={handleLogout} />
    </div>
  );
};

export default MyAccount;
