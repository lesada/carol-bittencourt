import styled from "styled-components";

export const Container = styled.main<{
  $align: string;
  $gap?: "none" | "small" | "medium" | "large";
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => {
    switch ($gap) {
      case "none":
        return "0";
      case "small":
        return "1rem";
      case "medium":
        return "2rem";
      case "large":
        return "3rem";
    }
  }};
  align-items: ${({ $align }) => $align};
  padding: 0 ${({ theme }) => theme.metrics.containerPadding};
  max-width: ${({ theme }) => theme.metrics.maxWidth};
  width: 100%;
  margin: 0 auto;
`;
