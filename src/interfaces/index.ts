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

interface IGenre {
  name: string;
  id: number;
}

//сделать один базовый интерфейс и для фильмов и для сериалов в котором будут поля которые есть и там и там, потом создать 2 интерфейса для фильмов и сериалов отдельно и наследовать их от базового

//или сделать общее и делать проверку в компоненты что пришло от сервака

export interface IFilmData {
  backdrop_path: string | null;
  genres: IGenre[];
  id: number;
  title?: string;
  tagline: string | null;
  vote_average: number;
  runtime: number | null;
  status: string;
  revenue: number;
  release_date?: string;
  poster_path: string | null;
  budget: number;
  original_language: string;
  overview: string | null;

  type?: string;
  name: string;
  episode_run_time?: number[];
  first_air_date: string;
}

export interface IErrorData {
  status_code?: number;
  success?: boolean;
  status_message?: string;
  errors?: string[];
}
