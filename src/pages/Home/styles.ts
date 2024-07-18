import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${({ theme }) => theme.metrics.containerPadding};
  max-width: ${({ theme }) => theme.metrics.maxWidth};
  width: 100%;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  max-width: 100%;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  align-self: stretch;

  @media screen and (min-width: 768px) {
    gap: 2.5rem;
  }
`;
