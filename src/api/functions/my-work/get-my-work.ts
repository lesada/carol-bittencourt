import { TMyWork } from "@/@types/my-work";
import { db } from "@/api/firebase";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

const getMyWork = async (): Promise<TMyWork> => {
  try {
    const querySnapshot = await getDocs(collection(db, "my-work"));
    const res = querySnapshot.docs.map((doc) => doc.data() as TMyWork);
    return res[0];
  } catch {
    toast.error("Erro ao buscar sobre");
    return { images: [] };
  }
};

export const useGetMyWork = () => {
  const myWork = useQuery({
    queryKey: ["my-work"],
    queryFn: getMyWork,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return { ...myWork };
};
