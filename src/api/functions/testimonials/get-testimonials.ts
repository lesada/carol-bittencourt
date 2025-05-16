import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

import { TTestimonial } from "@/@types/testimonial";
import { db } from "@/api/firebase";

const getTestimonials = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    const testimonialsList: TTestimonial[] = [];
    querySnapshot.forEach((doc) => {
      testimonialsList.push({ id: doc.id, ...doc.data() } as TTestimonial);
    });
    return testimonialsList;
  } catch {
    toast.error("Erro ao buscar depoimentos");
  }
};

export const useGetTestimonials = () => {
  const testimonials = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { ...testimonials };
};
