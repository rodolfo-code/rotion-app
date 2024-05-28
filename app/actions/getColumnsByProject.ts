import api from "@/services/axiosConfig";
import { Column } from "../types";

export default async function getColumnsByProject(projectId: string): Promise<Column[] | []> {
  "use server";
  try {
    const { data } = await api.get(`/columns?project_id=${projectId}`);

    return data;
  } catch (error) {
    console.log("Erro ao obter projects", error);
    return [];
  }
}
