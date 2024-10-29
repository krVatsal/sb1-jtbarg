export interface Hunt {
  id: number;
  title: string;
  description: string;
  startTime: string;
  participants: number;
  prize: string;
  difficulty: string;
  status: 'upcoming' | 'live';
}