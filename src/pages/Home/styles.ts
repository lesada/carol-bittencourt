import styled from "styled-components";

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

export const Video = styled.video`
  width: 100%;
  height: 8.625rem;
  object-fit: cover;
  object-position: right bottom;

  @media screen and (min-width: 768px) {
    height: 20.75rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20.375rem, 1fr));
  justify-items: center;
  gap: 1rem;

  div {
    justify-self: center;
  }
`;
