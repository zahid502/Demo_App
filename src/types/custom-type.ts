//----------- custom types ------------

export type ToastMessage = {
  message: string;
  type: string;
};

export type User = {
  id: number;
  email: string;
  fullName: string;
};

export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
};
