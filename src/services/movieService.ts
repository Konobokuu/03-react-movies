import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

interface FetchMoviesProps {
  query: string;
}

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async ({
  query,
}: FetchMoviesProps): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return response.data.results;
};