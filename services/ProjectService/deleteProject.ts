"use server";

import { ProjectError } from "@/app/types";
import api from "@/services/axiosConfig";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteProject(projectId: string, shouldRedirect: boolean): Promise<void | ProjectError> {
  const url = `/projects/${projectId}`;

  try {
    await api.delete(url);
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Project.",
      error,
    };
  }
  revalidatePath("/workspace");
  if (shouldRedirect) {
    redirect("/workspace");
  }
}
