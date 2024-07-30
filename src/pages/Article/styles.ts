import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 40rem;
  margin-bottom: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

export const Image = styled.div<{ $full?: boolean }>`
  width: 100%;

  height: 21rem;
  border-radius: 0.5rem;
  overflow: hidden;

  max-width: ${({ $full }) => ($full ? "100%" : "33.875rem;")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.p`
  text-align: justify;
  line-height: 1.5rem;
`;
