import styled from "styled-components";

import { VariantHeading } from ".";

export const Title = styled.h1<{
  $variant: VariantHeading;
  $color?: string;
  $align?: string;
}>`
  font-size: ${({ $variant }) => {
    switch ($variant) {
      case "h1":
        return "3.5rem";
      case "h2":
        return "3rem";
      case "h3":
        return "2.5rem";
      case "h4":
        return "2rem";
      case "h5":
        return "1.5rem";
      case "h6":
        return "1.25rem";
    }
  }};

  line-height: ${({ $variant }) => {
    switch ($variant) {
      case "h1":
        return "4rem";
      case "h2":
        return "3.5rem";
      case "h3":
        return "2.5rem";
      case "h4":
        return "2rem";
      case "h5":
        return "1.5rem";
      case "h6":
        return "1.75rem";
    }
  }};

  color: ${({ $color, theme }) => $color ?? theme.colors.neutral[0]};

  text-align: ${({ $align }) => $align ?? "left"};

  font-weight: 600;

  /* width: 100%; */

  @media screen and (max-width: 768px) {
    font-size: ${({ $variant }) => {
      switch ($variant) {
        case "h1":
          return "2.5rem";
        case "h2":
          return "2rem";
      }
    }};

    line-height: ${({ $variant }) => {
      switch ($variant) {
        case "h1":
          return "3.5rem";
        case "h2":
          return "2.5rem";
      }
    }};
  }
`;
