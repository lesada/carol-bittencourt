import { CSSProperties } from "react";

export function convertCss(cssString: string): CSSProperties {
  if (!cssString) return {};

  const styleObject: CSSProperties = {};

  cssString.split(";").forEach((rule) => {
    if (!rule.trim()) return;

    let [property, value] = rule.split(":").map((s) => s.trim());

    if (property && value) {
      const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );

      styleObject[camelCaseProperty as keyof CSSProperties] = value as any;
    }
  });

  return styleObject;
}
