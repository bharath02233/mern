
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define our single API slice object
export const productApi = createApi({
  reducerPath: 'productApi',
 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),

  endpoints:(builder)=>({
    postProduct:builder.mutation({
      query:(product)=>{
          return {
              url:`/`,
              method:"POST",
              body:product,
              headers:{"token":window.localStorage.getItem('token')}
          }
      }
    }),
    getAllProducts:builder.query({
      query:()=>{
        return {url:`/`,headers:{"token":window.localStorage.getItem('token')}}
        
      }
    }),
    getProduct:builder.query({
      query:(id)=>{
        return {url:`/${id}`,headers:{"token":window.localStorage.getItem('token')}}
        
      }
    }),
    
  })

  })


// Export the auto-generated hook for the `getPosts` query endpoint
export const { usePostProductMutation,useGetAllProductsQuery,useGetProductQuery} = productApi;










