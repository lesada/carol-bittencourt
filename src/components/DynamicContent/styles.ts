import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20.375rem, 1fr));
  gap: 1.5rem;

  div {
    justify-self: center;
  }
`;

export const Legend = styled.figcaption`
  line-height: 1rem;
  font-size: 0.75rem;
  text-align: center;
  margin: 0 auto;
`;

export const Image = styled.figure<{
  $full?: boolean;
  $object?: "cover" | "contain";
}>`
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: 100%;
    object-fit: ${({ $object = "cover" }) => $object};
  }
`;

export const Text = styled.p<{ $bold?: boolean }>`
  text-align: start;
  line-height: 1.5rem;
  font-weight: ${({ $bold }) => ($bold ? "700" : "400")};
`;

export const Detach = styled.p`
  font-size: 1.125rem;
  line-height: 2rem;
  font-style: italic;
  max-width: 38rem;
  margin: 0 auto;
`;

export const List = styled.ul`
  li {
    margin-left: 2rem;
  }
`;

export const Anchor = styled.a`
  color: #2a89ef;
`;
