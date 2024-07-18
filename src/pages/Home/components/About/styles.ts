import styled from "styled-components";

export const Pictures = styled.div`
  display: flex;

  position: relative;
  margin: 0 auto;
`;

export const Picture = styled.div`
  width: 7.625rem;
  height: 9.95444rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-right: -1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:first-child {
    z-index: 1;
    transform: rotate(-4.59deg);
  }

  &:nth-child(2) {
    transform: rotate(14.977deg);
  }

  &:last-child {
    z-index: 1;
    transform: rotate(-3.674deg);
  }

  @media screen and (min-width: 768px) {
    width: 13.375rem;
    height: 17.461rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral[200]};
`;
