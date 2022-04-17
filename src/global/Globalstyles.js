import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}

img {
  display: block;
}
button {
  background: none;
  border: none;
}
::-webkit-scrollbar{
  width: .2px;
}


// while dev
#root{
  min-height: 100vh;
}

// just save for login and sign pages
.roboto{
  font-family: 'Roboto Slab', serif;
}
`;
