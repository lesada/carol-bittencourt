import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import Heading from "../Heading";
import { Container, Detach, Image, Legend, List, Text } from "./styles";

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
              <Heading as="h2" variant="small">
                {parsedChildren}
              </Heading>
            );
          case "h3":
            return (
              <Heading as="h3" variant="x-small">
                {parsedChildren}
              </Heading>
            );
          case "p":
            return <Text>{parsedChildren}</Text>;
          case "strong":
            return (
              <Text $bold as="span">
                {parsedChildren}
              </Text>
            );
          case "figcaption":
            return <Legend>{parsedChildren}</Legend>;
          case "blockquote":
            return <Detach>{parsedChildren}</Detach>;
          case "ul":
            return <List>{parsedChildren}</List>;
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
              <a href={attribs.href} target="_blank" rel="noopener noreferrer">
                {parsedChildren}
              </a>
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
