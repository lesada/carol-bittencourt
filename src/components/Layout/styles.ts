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
