import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.neutral50};
  background-color: ${({ theme }) => theme.colors.neutral10};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    font-size: 1.2rem;
  }
  input {
    font-size: 0.9rem;
    background: none;
    border: none;
    outline: none;
    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral50};
    }
  }
`;
