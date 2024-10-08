import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"  /* strictly import from this package*/

const jsonApi=createApi({
    reducerPath:'jsonApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000/posts'}
    ),
    endpoints:(builder)=>({getAllPosts:builder.query({query:()=>`/`,

    }),
    addNewPost:builder.mutation({query:(newpost)=>{
        return {
        url:"/",
        method:"POST",
        body:newpost
    }
     }
    }),
    deletePost:builder.mutation({query:(id)=>{
        return {
            url:`/${id}`,
            method:"DELETE",
    
        }
    }}),
    putPost:builder.mutation({
        query:(newpost)=>{
            return {
                url:`/${newpost.id}`,
                method:"PUT",
                body:newpost
            }
        }
    })
   
}),
})

export const {usePutPostMutation,useGetAllPostsQuery,useAddNewPostMutation,useLazyGetAllPostsQuery,useDeletePostMutation}=jsonApi
export default jsonApi;