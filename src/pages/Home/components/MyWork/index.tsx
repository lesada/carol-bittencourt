import { useGetMyWork } from "@/api/functions/my-work/get-my-work";
import Heading from "@/components/Heading";
import useIsMobile from "@/hooks/useIsMobile";
import { Section } from "../../styles";
import { Logo, Logos } from "./styles";

function MyWork() {
  const isMobile = useIsMobile();

  const { data: logos } = useGetMyWork();

  return (
    <Section>
      <Heading
        as="h3"
        variant={isMobile ? "medium" : "x-large"}
        align={isMobile ? "center" : "left"}
      >
        Onde você pode ter visto meu trabalho
      </Heading>

      <Logos>
        {logos?.images?.map((logo) => {
          return (
            <Logo key={logo.url}>
              <img src={logo.url} alt="" />
            </Logo>
          );
        })}
      </Logos>
    </Section>
  );
}

export default MyWork;
