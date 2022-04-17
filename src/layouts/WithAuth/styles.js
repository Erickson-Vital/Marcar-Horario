import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary10};
  display: flex;
  flex-direction: ${({ page }) => (page === "login" ? "row" : "row-reverse")};
  transition: 0.5s linear;
  .img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s linear;
    img {
      height: 100vh;
    }
  }
  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(250, 60, 113, 0.18);
  }
  main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1023.9px) {
    .img {
      max-width: 50%;
    }
  }
  @media screen and (max-width: 767.9px) {
    height: 100vh;
    .img {
      display: none;
    }
  }
  @media screen and (max-width: 424.9px) {
    background: linear-gradient(
        to top,
        rgba(250, 60, 113, 0.18),
        rgba(250, 60, 113, 0.18)
      ),
      url(${({ img }) => img}) no-repeat;
    background-size: cover;
    background-position: center;
    padding: 10% 5%;
    main {
      width: 90%;
      padding: 4%;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.colors.primary10};
      border-radius: 5px;
    }
  }
`;
