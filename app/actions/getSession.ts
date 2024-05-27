import { ISession } from "../types";

export default async function getSession(): Promise<ISession> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        email: "rod.vgo@gmail.com",
      };
      resolve({ user });
    }, 1000);
  });
}
