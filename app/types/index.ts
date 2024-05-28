import { TagColors } from "@/utils/TagColors";

export interface ISession {
  user: {
    email: string;
  };
}

export interface Projects {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Card {
  id: number;
  content: string;
  labels: string[] | [];
  user?: string;
  description: string;
}

export interface Column {
  title: string;
  // type: "todo" | "doing" | "paused" | "done" | "other";
  color: keyof typeof TagColors;
  creatable: boolean;
  cards?: Card[];
}

export interface ProjectError {
  message: string;
  error: any;
}

export interface IBoardProps {
  columns: Column[] | [];
}

export interface IParams {
  projectId: string;
}
