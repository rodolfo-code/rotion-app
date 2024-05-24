import api from "@/services/axiosConfig";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormProjectSchema = z.object({
  userId: z.string(),
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

const CreateProject = FormProjectSchema.omit({ id: true });

export async function createProject(formData: FormData) {
  try {
    await api.post("/projects", {
      userId: formData.get("userId"),
      title: formData.get("title") ?? "Untitled",
      description: formData.get("description") ?? "",
      icon: formData.get("icon") ?? "",
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
      error,
    };
  }
}
