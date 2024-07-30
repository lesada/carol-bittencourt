import { PropsWithChildren } from "react";

import { Container } from "./styles";

type LayoutProps = PropsWithChildren & {
  gap?: "none" | "small" | "medium" | "large";
  align?: string;
  justify?: "center" | "flex-start" | "flex-end" | "space-between";
};

function Layout({
  children,
  align = "flex-center",
  gap = "none",
  justify = "flex-start",
}: LayoutProps) {
  return (
    <Container $align={align} $gap={gap} $justify={justify}>
      {children}
    </Container>
  );
}

export default Layout;
