export type TTestimonial = {
  id: string;
  name: string;
  profileImage: string | null;
  content: {
    en: string;
    pt: string;
  };
};
