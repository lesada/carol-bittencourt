import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand[900]};
  z-index: 9;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[900]};
`;

const listMenu = css`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;
`;

export const Menu = styled.nav`
  ${listMenu}

  position: absolute;
  top: 0;
  left: 0;

  padding: 1.5rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.brand[900]};

  ul {
    ${listMenu}
  }

  button {
    margin-left: auto;
  }
`;

export const MenuItem = styled.li`
  padding: 0 1rem;
  list-style: none;
  font-size: 0.875rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const Items = styled.ul`
  display: flex;
`;

export const Padding = styled.div`
  height: 5.5rem;
`;
