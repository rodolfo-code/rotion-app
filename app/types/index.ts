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
  color?: string;
  creatable: boolean;
  cards: Card[];
}
