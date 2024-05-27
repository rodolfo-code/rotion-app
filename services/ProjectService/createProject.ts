"use server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import api from "@/services/axiosConfig";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData): Promise<any> {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new Error("Unauthorized");
    }

    await api.post("/projects", {
      user_id: currentUser.user_id,
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
