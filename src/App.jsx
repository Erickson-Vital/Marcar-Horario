import React from "react";
import { Routing } from "./routes";

import { ThemeProvider } from "styled-components";
import { main } from "@/global/Theme";
import { GlobalStyles } from "@/global/Globalstyles";

export const App = () => {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
};
