import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
  position: relative;
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

  a {
    text-decoration: none;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;
