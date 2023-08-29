export interface Movie {
  id: number;
  name?: string;
  original_name?: string;
  title?: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  genres: Genre[];
  origin_country: Country[];
  original_language: string;
  popularity: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Country {
  id: number;
  name: string;
}

export const config = {
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  },
};
