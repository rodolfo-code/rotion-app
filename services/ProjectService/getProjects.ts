import api from "../axiosConfig";

import { Projects } from "@/app/types";

async function getProjects(): Promise<Projects[] | []> {
  "use server";
  try {
    const { data } = await api.get("/projects");

    return data;
  } catch (error: any) {
    console.log("Erro ao obter projects", error);
    return [];
  }
}

export { getProjects };
