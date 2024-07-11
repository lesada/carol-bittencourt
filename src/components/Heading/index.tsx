import { Title } from "./styles";

export type VariantHeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  variant: VariantHeading;
  children: React.ReactNode;
  color?: string;
};

function Heading({ variant, children, color }: HeadingProps) {
  return (
    <Title as={variant} $variant={variant} $color={color}>
      {children}
    </Title>
  );
}

export default Heading;
