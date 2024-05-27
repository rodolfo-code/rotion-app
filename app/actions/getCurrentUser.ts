import api from "@/services/axiosConfig";
import getSession from "./getSession";

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await api.get("/users", {
      params: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser.data[0];
  } catch (error: any) {
    return null;
  }
}
