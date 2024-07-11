import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  align-self: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 13rem;
  margin: 0 auto;

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
