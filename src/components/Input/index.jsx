import React from "react";
import { Container } from "./styles";

export const Input = (props) => {
  const { icon, type, value, onChange, placeholder } = props;
  return (
    <Container>
      {icon}
      <input
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};
