import { Title } from "./styles";

export type VariantHeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  variant: VariantHeading;
  children: React.ReactNode;
  color?: string;
  align?: string;
};

function Heading({ variant, children, color, align }: HeadingProps) {
  return (
    <Title as={variant} $variant={variant} $color={color} $align={align}>
      {children}
    </Title>
  );
}

export default Heading;
