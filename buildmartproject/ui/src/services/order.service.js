
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define our single API slice object
export const orderApi = createApi({
  reducerPath: 'orderApi',
 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/orders' }),

  endpoints:(builder)=>({
    addOrders:builder.mutation({
      query:(order)=>{
          return {
              url:`/`,
              method:"POST",
              body:order,
              headers:{token:window.localStorage.getItem('token')}
          }
      }
    }),
    getOrders:builder.query({
      query:()=>{
        return {
              url:'/',
              method:'GET',
              headers:{token:window.localStorage.getItem('token')}
        }
      }
    }),
    deleteOrder:builder.mutation({
      query:(order)=>{
        console.log(order);
        return {
           
              url:`/${order.id}`,
              method:'DELETE',
              headers:{token:window.localStorage.getItem('token')}
        }
      }
    }),

    })

  })


// Export the auto-generated hook for the `getPosts` query endpoint
export const { useAddOrdersMutation,useGetOrdersQuery,useLazyGetOrdersQuery,useDeleteOrderMutation} = orderApi;
