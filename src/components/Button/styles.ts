import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[900]};
  padding: 1.25rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  transition: 0.3s;
  height: 3.75rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;
