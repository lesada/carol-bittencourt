import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const ExternalLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.neutral[200]};
    font-size: 0.75rem;
    letter-spacing: 0.01875rem;
    line-height: 1rem;
  }
`;

export const Home = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral[200]};
`;
