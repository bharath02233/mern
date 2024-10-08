import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const countriesApi=createApi({
  reducerpath:'countriesApi',
  baseQuery:fetchBaseQuery({baseUrl:'https://restcountries.com/v3/all'}),
  endpoints:(builder)=>({
    getAllCountries:builder.query({
        query:()=>`/`,
    })
  }),
     })





export const {useGetAllCountriesQuery,useLazyGetAllCountriesQuery}=countriesApi
export default countriesApi;