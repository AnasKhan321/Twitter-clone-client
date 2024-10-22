import { graphqlclient } from "@/clients/api"
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {allTweetQuery}  from "@/graphql/queries/tweet"
import {alltweetDatatype} from "@/Interfaces/index"
import { createTweetMutation } from "@/graphql/mutations/tweet"
import {CreateTweetData} from "@/Interfaces/index"
import toast from "react-hot-toast"
export const GetAllTweets = ()=>{
        const {data} = useQuery<alltweetDatatype>({
            queryKey : ["all-tweets"] , 
            queryFn : ()=> graphqlclient.request(allTweetQuery)
        })

        return  data
}

export const CreateTweet = ()=>{

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn : (payload : CreateTweetData)=> graphqlclient.request(createTweetMutation  , { payload })  , 
        onSuccess : async()=> {
            toast.success("Created Successfully !")
            await queryClient.invalidateQueries(["all-tweets"])
        
        }
    })
    return mutation ; 
}