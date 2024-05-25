"use server";

import api from "@/services/axiosConfig";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData): Promise<any> {
  try {
    await api.post("/projects", {
      userId: formData.get("userId"),
      title: formData.get("title") ?? "Untitled",
      description: formData.get("description") ?? "",
      icon: formData.get("icon") ?? "",
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Project.",
      error,
    };
  }

  revalidatePath("/workspace");
}
