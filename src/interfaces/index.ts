export interface ICardData {
  poster_path: string | null;
  release_date?: string;
  id: number;
  title?: string;
  name: string;
  vote_average: number;
  first_air_date: string;
  [propName: string]: any;
}
