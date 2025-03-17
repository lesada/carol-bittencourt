import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { TProject } from "@/@types/project";
import { db } from "@/api/firebase";

const getProject = async (id: string) => {
  try {
    const docRef = doc(db, "posts", id); // Referência ao documento específico
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() } as TProject;
    } else {
      toast.error("Projeto não encontrado");
      return null;
    }
  } catch {
    toast.error("Erro ao buscar o projeto");
    return null;
  }
};

export const useGetProject = (id: string) => {
  const project = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProject(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!id,
  });

  return { ...project };
};
