import { Projects } from "@/app/types";
import api from "../axiosConfig";

const getProjects = async (): Promise<Projects[] | []> => {
  "use server";
  try {
    const { data } = await api.get("/projects");

    return data;
  } catch (error: any) {
    console.log("Erro ao obter projects", error);
    return [];
  }
};

export default getProjects;
