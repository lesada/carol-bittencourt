import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { TProject } from '@/@types/project';
import { db } from '@/api/firebase';

const getProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const projectsList: TProject[] = [];
    querySnapshot.forEach((doc) => {
      projectsList.push({ id: doc.id, ...doc.data() } as TProject);
    });
    return projectsList;
  } catch {
    toast.error('Erro ao buscar projetos');
  }
};

export const useGetProjects = () => {
  const projects = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { ...projects };
};
