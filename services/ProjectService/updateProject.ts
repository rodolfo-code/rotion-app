import { ProjectError } from "@/app/types";
import api from "../axiosConfig";

export async function updateProject(projectId: string, formData: FormData): Promise<void | ProjectError> {
  try {
    await api.put(`/projects/${projectId}`, {
      title: formData.get("title"),
      description: formData.get("description"),
      icon: formData.get("icon"),
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Project.",
      error,
    };
  }
}
