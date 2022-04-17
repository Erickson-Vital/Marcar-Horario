import styled from "styled-components";

export const Container = styled.div`
  * {
    font-family: "Roboto Slab", serif;
  }
  width: 80%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & > img {
    margin-bottom: 40px;
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.neutral30};
    font-weight: 500;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    button {
      margin: 5px 0;
      color: ${({ theme }) => theme.colors.neutral10};
      background-color: ${({ theme }) => theme.colors.primary20};
      width: 100%;
      padding: 10px 0;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .login--forgot {
    color: ${({ theme }) => theme.colors.neutral30};
    font-size: 0.9rem;
  }

  .linkSign {
    margin-top: 40px;
    color: ${({ theme }) => theme.colors.neutral30};
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 424.9px) {
    form {
      width: 100%;
    }
  }
  @media screen and (max-height: 580px) {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    justify-content: flex-start;
  }
`;
