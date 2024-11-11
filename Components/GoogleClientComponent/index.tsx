"use client"  
import { graphqlclient } from "@/clients/api"
import { verifyUserGoogleTokenQuery } from "@/graphql/queries/user"
import {CredentialResponse, GoogleLogin}  from "@react-oauth/google"

import toast from "react-hot-toast"

import { useQueryClient } from "@tanstack/react-query"

interface VerifyGoogleTokenResponse {
    verifyGoogleToken : string
}

const GoogleClient = ()=>{

    const queryClient = useQueryClient()

    const onSuccessFunction = async (cred: CredentialResponse) => {
        const googleToken = cred.credential;
        console.log(googleToken);
        
        if (!googleToken) {
            return toast.error("Token not found");
        }

        try {
            // Pass the token correctly
            const data = await graphqlclient.request<VerifyGoogleTokenResponse>(verifyUserGoogleTokenQuery, {
                token: googleToken,
            });
            console.log(data)
            console.log(data.verifyGoogleToken

            )
           window.localStorage.setItem("__twittertoken"  , data.verifyGoogleToken)
           await queryClient.invalidateQueries({ queryKey: ["current-user"] });
        } catch (error  ) {
            console.error("Error verifying token:", error);
          
        }
    };
    return(
        <GoogleLogin onSuccess={onSuccessFunction}/>
    )
}

export default GoogleClient ; 