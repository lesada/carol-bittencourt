import styled from "styled-components";

export const Pictures = styled.div`
  display: flex;

  position: relative;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    &:hover {
      div:first-child {
        transform: rotate(-8.234deg) translateX(-0.5rem);
        background-color: red;
      }

      div:nth-child(2) {
        transform: rotate(5.334deg);
      }

      div:last-child {
        transform: rotate(-8.24deg) translateX(0.5rem);
      }
    }
  }
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

    transition: transform 0.3s ease;
  }
`;

export const TextWrapper = styled.div`
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;
