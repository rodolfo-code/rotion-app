// import { TagColors } from "@/utils/tagColors";

import { TagColors } from "@/utils/TagColors";

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

export interface Board {
  title: string;
  // type: "todo" | "doing" | "paused" | "done" | "other";
  color: keyof typeof TagColors;
  creatable: boolean;
  cards: Card[];
}
