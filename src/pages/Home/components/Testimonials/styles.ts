import styled from "styled-components";

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 3rem;
  width: calc(100% - 2rem);
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral[200]};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  user-select: none;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
`;

export const Picture = styled.div`
  width: 3.4375rem;
  height: 3.4375rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.neutral[200]};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 2rem;
`;
