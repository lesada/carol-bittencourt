import mock from "@/assets/images/mock-card.png";
import { PATHS } from "@/routes";
import theme from "@/styles";

import Heading from "../Heading";

import { Container, Picture, Tag, Tags, Wrapper } from "./styles";

export type CardProps = {
  title: string;
  tags: string[];
  id: string;
  image?: string;
};

function Card({ title, tags, image, id }: CardProps) {
  return (
    <Container to={PATHS.ARTICLE.replace(":id", id)}>
      <Picture>
        <img src={image ?? mock} alt="" />
      </Picture>
      <Wrapper>
        <Heading variant="h6" color={theme.colors.neutral[900]}>
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
