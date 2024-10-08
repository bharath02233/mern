
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define our single API slice object
export const authApi = createApi({
  reducerPath: 'authApi',
 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),

  endpoints:(builder)=>({
    login:builder.mutation({
      query:(user)=>{
          return {
              url:`/`,
              method:"POST",
              body:user
          }
      }
    }),
    getData:builder.query({
      query:()=>{
        return{
          url:`/`,
          method:"GET"
        }
      }
      })
    
  })

  })


// Export the auto-generated hook for the `getPosts` query endpoint
export const { useLoginMutation,useGetDataQuery} = authApi;
