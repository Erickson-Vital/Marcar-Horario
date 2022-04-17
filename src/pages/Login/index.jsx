import React from "react";
import { Container } from "./styles";

import { Input } from "@/components/Input";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.png";

export const Login = () => {
  const [userData, setUser] = React.useState({
    email: "",
    passWord: "",
  });

  const handleLogin = () => {
    console.log("loggin as: ", userData);
  };

  return (
    <Container>
      <img src={logo} alt="Beauty dream" />

      <h3>Faça seu login</h3>

      <form onSubmit={(e) => e.preventDefault()}>
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
        <button onClick={handleLogin}>Entrar</button>
      </form>

      <a
        className="login--forgot"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Esqueci minha senha
      </a>
      <Link to="/sign" className="linkSign">
        <FiLogIn />
        Criar conta
      </Link>
    </Container>
  );
};
