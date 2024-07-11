import mock from "@/assets/images/mock-card.png";
import theme from "@/styles";

import Heading from "../Heading";

import { Container, Picture, Tag, Tags, Wrapper } from "./styles";

function Card() {
  return (
    <Container>
      <Picture>
        <img src={mock} alt="" />
      </Picture>
      <Wrapper>
        <Heading variant="h4" color={theme.colors.neutral[900]}>
          Sociedade Brasileira de Computação
        </Heading>
        <Tags>
          <Tag>UX/UX Design</Tag>
          <Tag>Redesign</Tag>
          <Tag>Website</Tag>
        </Tags>
      </Wrapper>
    </Container>
  );
}

export default Card;
