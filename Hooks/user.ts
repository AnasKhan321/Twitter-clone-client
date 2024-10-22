"use client"
import { graphqlclient } from "@/clients/api"
import { getCurrentUserQuery } from "@/graphql/queries/user"
import {
    useMutation,
    useQuery,
    useQueryClient,
 
  } from '@tanstack/react-query'
import {getCurrentUserData}  from "@/Interfaces/index"
import { followuser, unFollowUser } from "@/graphql/mutations/user"

export const UserCurrentUser = ()=>{
    const {data}  = useQuery<getCurrentUserData>({
        queryKey : ["current-user"]  , 
        queryFn : ()=> graphqlclient.request(getCurrentUserQuery)  , 
    })

    return data?.getCurrentUser;
}


export const Follouser = ()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey : ["follow-user"]  , 
        mutationFn : (payload : string)=> graphqlclient.request(followuser  , {to : payload})  , 
        onSuccess : ()=>{
             queryClient.invalidateQueries({ queryKey: ["current-user"] });
        }
    })

    return mutation ; 
}

export const UnFollowUser = ()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey : ["unfollow-user"]  , 
        mutationFn : (to : string)=> graphqlclient.request(unFollowUser  , {to : to}) , 
        onSuccess : ()=>{
             queryClient.invalidateQueries({ queryKey: ["current-user"] });
        }
    })

    return mutation ; 
}