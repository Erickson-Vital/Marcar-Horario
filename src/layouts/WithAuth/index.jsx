import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "./styles";

import displayImg from "@/assets/displayImg.png";

export const WithAuth = () => {
  const location = useLocation();
  const [page, setPage] = React.useState("");

  React.useEffect(() => {
    if (location.pathname === "/login") {
      setPage("login");
    } else {
      setPage("sign");
    }
  }, [location.pathname]);

  return (
    <Container img={displayImg} page={page}>
      <main>
        <Outlet />
      </main>
      <div className="img">
        <img className="displayImg" src={displayImg} alt="haircut" />
        <div className="blur" />
      </div>
    </Container>
  );
};
