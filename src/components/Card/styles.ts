import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  max-width: 20rem;
`;

export const Picture = styled.div`
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  aspect-ratio: 1.55;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 1rem;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.25rem;
`;

export const Tag = styled.li`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.brand[500]};
  border-radius: 0.25rem;
  letter-spacing: 0.01875rem;
  margin-right: 0.5rem;
  list-style-position: inside;
  line-height: 1rem;

  &:first-child {
    list-style: none;
  }
`;
