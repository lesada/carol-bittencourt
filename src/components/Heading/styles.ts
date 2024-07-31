import styled from "styled-components";

import { TVariant } from ".";

export const Title = styled.h1<{
  $variant: TVariant;
  $color?: string;
  $align?: string;
}>`
  font-size: ${({ $variant }) => {
    switch ($variant) {
      case "xx-large":
        return "3.5rem";
      case "x-large":
        return "3rem";
      case "large":
        return "2.5rem";
      case "medium":
        return "2rem";
      case "small":
        return "1.5rem";
      case "x-small":
        return "1.25rem";
    }
  }};

  line-height: ${({ $variant }) => {
    switch ($variant) {
      case "xx-large":
        return "4rem";
      case "x-large":
        return "3.5rem";
      case "large":
        return "3rem";
      case "medium":
        return "2.5rem";
      case "small":
        return "2rem";
      case "x-small":
        return "1.75rem";
    }
  }};

  color: ${({ $color, theme }) => $color ?? theme.colors.neutral[0]};

  text-align: ${({ $align }) => $align ?? "left"};

  font-weight: 600;
`;
