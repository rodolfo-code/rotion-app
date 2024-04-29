import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
// import { signOut } from "next-auth/react";
import { GoTasklist } from "react-icons/go";
import { IconType } from "react-icons";

// import useConversation from "./useConversation";

interface UseRoutesProps {
  id: string;
  name: string;
  icon: IconType;
}

interface NavRoutes {
  label: string;
  href: string;
  icon: IconType;
  active: boolean;
}

const useRoutes = (projectList: UseRoutesProps[]) => {
  const pathname = usePathname();
  // const { conversationId } = useConversation();

  let formatedProjectsRoute: NavRoutes[] = projectList.map((project) => ({
    label: project.name,
    href: `/${project.id}`,
    icon: project.icon,
    active: pathname === `/${project.id}`,
  }));

  const routes = useMemo(() => [...formatedProjectsRoute], [pathname]);

  // const routes = useMemo(
  //   () => [
  //     {
  //       label: "Front integridade",
  //       href: "/pages",
  //       icon: GoTasklist,
  //       // active: pathname === "/pages" || !!conversationId,
  //       active: pathname === "/pages",
  //     },
  //     {
  //       label: "Backend fullcycle",
  //       href: "/users",
  //       icon: GoTasklist,
  //       active: pathname === "/users",
  //     },
  //     {
  //       label: "backend IC",
  //       href: "#",
  //       // onClick: () => signOut(),
  //       icon: GoTasklist,
  //     },
  //   ],
  //   [pathname]
  // );

  return routes;
};

export default useRoutes;
