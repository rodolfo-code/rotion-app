export interface Card {
  id: number;
  content: string;
  labels: string[];
  user?: string;
  description: string;
}

export interface Board {
  title: string;
  creatable: boolean;
  cards: Card[];
}
