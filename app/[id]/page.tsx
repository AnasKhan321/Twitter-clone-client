
import { graphqlclient } from "@/clients/api";
import TwiterLayout from "@/Components/Layout/TwitterLayout"

import { UseUserData } from "@/Components/ReactQueryHooks";
import { GetUserById } from "@/graphql/queries/user";
import { User } from "@/Interfaces";


interface UserData {
    getUserById : User| null
}


export default async  function Home  ({ params }: { params: { id: string } } ){
 
    const userData : UserData  = await graphqlclient.request(GetUserById, { getUserByIdId: params.id });
    console.log(userData)
    // Log the user data to the console
    if(userData.getUserById == null){
        return (
            <div> User not found</div>
        )
    }else{
        console.log(userData.getUserById.email); //
    
        return(
            <TwiterLayout>
                <UseUserData data={userData.getUserById}/> 
        
            </TwiterLayout>
        )
    }
    
}



