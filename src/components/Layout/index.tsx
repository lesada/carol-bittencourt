import { PropsWithChildren } from "react";

import { Container } from "./styles";

type LayoutProps = PropsWithChildren & {
  gap: "none" | "small" | "medium" | "large";
  align?: string;
};

function Layout({
  children,
  align = "flex-center",
  gap = "none",
}: LayoutProps) {
  return (
    <Container $align={align} $gap={gap}>
      {children}
    </Container>
  );
}

export default Layout;
