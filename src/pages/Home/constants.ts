import { CardProps } from "@/components/Card";

import InOutBanner from "../Article/InOut/assets/banner.png";
import SBCBanner from "../Article/SBC/assets/banner.png";

export const cards: CardProps[] = [
  {
    id: "1",
    title: "InOut - Time Tracker",
    tags: ["UI Design", "Aplicativo"],
    image: InOutBanner,
  },
  {
    id: "2",
    title: "Sociedade Brasileira de Computação",
    tags: ["UI Design", "Redesign", "Website"],
    image: SBCBanner,
  },
];
