import React from "react";
import { Container } from "../Login/styles";

import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiLogIn, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "@/components/Input";
import logo from "@/assets/logo.png";

export const Sign = () => {
  const [userData, setUser] = React.useState({
    username: "",
    email: "",
    passWord: "",
  });

  const handleSign = () => {
    console.log("sign as: ", userData);
  };

  return (
    <Container>
      <img src={logo} alt="Beauty dream" />
      <h3>Faça seu registro</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          value={userData.username}
          onChange={(e) => setUser({ ...userData, username: e.target.value })}
          icon={<FiUser />}
          placeholder="Nome"
        />
        <Input
          type="email"
          value={userData.email}
          onChange={(e) => setUser({ ...userData, email: e.target.value })}
          icon={<HiOutlineMail />}
          placeholder="E-mail"
        />
        <Input
          type="password"
          value={userData.passWord}
          onChange={(e) => setUser({ ...userData, passWord: e.target.value })}
          icon={<FiLock />}
          placeholder="Senha"
        />
        <button onClick={handleSign}>Entrar</button>
      </form>
      <a
        className="login--forgot"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Esqueci minha senha
      </a>
      <Link to="/login" className="linkSign">
        <FiLogIn />
        Fazer login
      </Link>
    </Container>
  );
};
