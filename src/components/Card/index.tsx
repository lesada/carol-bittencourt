import { PATHS } from "@/routes";
import theme from "@/styles";

import Heading from "../Heading";

import { Container, Picture, Tag, Tags, Wrapper } from "./styles";

export type CardProps = {
  title: string;
  tags: string[];
  id: string;
  image: string;
};

function Card({ title, tags, image, id }: CardProps) {
  return (
    <Container to={PATHS.ARTICLE.replace(":id", id)}>
      <Picture>
        <img src={image} alt="" />
      </Picture>
      <Wrapper>
        <Heading variant="x-small" as="h6" color={theme.colors.neutral[900]}>
          {title}
        </Heading>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Wrapper>
    </Container>
  );
}

export default Card;
