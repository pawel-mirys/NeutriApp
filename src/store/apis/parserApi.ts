import { ParsedFoodData } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const URL = import.meta.env.VITE_APP_URL;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const APP_ID = import.meta.env.VITE_APP_ID;

const parserApi = createApi({
  reducerPath: 'parser',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchFoodByName: builder.query<ParsedFoodData, { ingr: string }>({
        query: ({ ingr }) => {
          return {
            url: `/parser`,
            method: 'GET',
            params: {
              app_id: APP_ID,
              app_key: APP_KEY,
              ingr: ingr,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchFoodByNameQuery } = parserApi;

export { parserApi };
