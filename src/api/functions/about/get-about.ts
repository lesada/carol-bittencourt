import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

import { TAbout } from "@/@types/about";
import { db } from "@/api/firebase";

const getAbout = async (): Promise<TAbout> => {
  try {
    const querySnapshot = await getDocs(collection(db, "about"));
    const res = querySnapshot.docs.map((doc) => doc.data() as TAbout);
    return res[0];
  } catch {
    toast.error("Erro ao buscar sobre");
    return {
      en: "",
      images: ["", "", ""],
      pt: "",
    };
  }
};

export const useGetAbout = () => {
  const about = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { ...about };
};
