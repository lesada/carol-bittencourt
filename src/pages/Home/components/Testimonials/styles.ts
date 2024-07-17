import styled from "styled-components";

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 3rem;
  width: 100%;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral[200]};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Picture = styled.div`
  width: 3.4375rem;
  height: 3.4375rem;
  border-radius: 50%;
  overflow: hidden;

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
