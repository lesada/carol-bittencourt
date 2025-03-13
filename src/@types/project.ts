export type TProject = {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  tags: string[];
  image: string | null;
  content: {
    en: string;
    pt: string;
  };
  createdAt: string;
};
