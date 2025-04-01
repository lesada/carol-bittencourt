import { Title } from "./styles";

type THeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TVariant =
  | "xx-large"
  | "x-large"
  | "large"
  | "medium"
  | "small"
  | "x-small";

type HeadingProps = {
  variant: TVariant;
  children: React.ReactNode;
  as?: THeading;
  color?: string;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
};

function Heading({
  as = "h1",
  variant,
  children,
  color,
  align,
  style,
}: HeadingProps) {
  return (
    <Title
      as={as}
      $variant={variant}
      $color={color}
      $align={align}
      style={style}
    >
      {children}
    </Title>
  );
}

export default Heading;
