import styled from "styled-components";

export const Logo = styled.div`
  width: 100%;
  max-width: 8rem;
  margin: auto;
  height: 100%;
  max-height: 5rem;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 4rem;

  width: 100%;
  height: 100%;
`;
