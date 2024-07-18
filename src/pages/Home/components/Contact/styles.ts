import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 13rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 30rem;
  }

  label {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.neutral[200]};
  }

  input {
    width: 100%;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.neutral[200]};
  }

  textarea {
    width: 100%;
    height: 4rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.neutral[200]};

    resize: vertical;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(17, 55, 96, 0);
    background-color: ${({ theme }) => theme.colors.neutral[200]};

    color: ${({ theme }) => theme.colors.brand[900]};
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
  }
`;
