import { convertCss } from "@/utils/convertCss";
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import Heading from "../Heading";
import { Anchor, Container, Detach, Image, Legend, List, Text } from "./styles";

type DynamicContentProps = {
  content: string | null | undefined;
};

function DynamicContent({ content }: DynamicContentProps) {
  if (!content || typeof content !== "string") return null;

  const options: HTMLReactParserOptions = {
    replace: (node: DOMNode) => {
      if (node instanceof Element) {
        const { name, attribs, children } = node;

        const parsedChildren = domToReact(
          children as unknown as DOMNode[],
          options
        );

        switch (name) {
          case "h2":
            return (
              <Heading
                as="h2"
                variant="small"
                style={convertCss(attribs.style)}
              >
                {parsedChildren}
              </Heading>
            );
          case "h3":
            return (
              <Heading
                as="h3"
                variant="x-small"
                style={convertCss(attribs.style)}
              >
                {parsedChildren}
              </Heading>
            );
          case "p":
            return (
              <Text style={convertCss(attribs.style)}>{parsedChildren}</Text>
            );
          case "strong":
            return (
              <Text style={convertCss(attribs.style)} $bold as="span">
                {parsedChildren}
              </Text>
            );
          case "figcaption":
            return (
              <Legend style={convertCss(attribs.style)}>
                {parsedChildren}
              </Legend>
            );
          case "blockquote":
            return (
              <Detach style={convertCss(attribs.style)}>
                {parsedChildren}
              </Detach>
            );
          case "ul":
            return (
              <List style={convertCss(attribs.style)}>{parsedChildren}</List>
            );
          case "li":
            return <li>{parsedChildren}</li>;
          case "br":
            return <br />;
          case "img":
            return (
              <Image>
                <img src={attribs.src} alt={attribs.alt || ""} />
                {attribs.alt && <Legend>{attribs.alt}</Legend>}
              </Image>
            );
          case "figure":
            return <Image>{parsedChildren}</Image>;
          case "a":
            return (
              <Anchor href={attribs.href} rel="noopener noreferrer">
                {parsedChildren}
              </Anchor>
            );
          case "div":
            return <div>{parsedChildren}</div>;
          default:
            return undefined;
        }
      }
      return undefined;
    },
  };

  return <Container>{parse(content, options)}</Container>;
}

export default DynamicContent;
