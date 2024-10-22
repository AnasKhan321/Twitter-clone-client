

import { Tweet } from "@/Components/ClientComponents/index";
import { AllTweets } from "@/Components/ReactQueryHooks/index";
import TwiterLayout from "@/Components/Layout/TwitterLayout";





export default function Home() {
  
  
  return (

    <TwiterLayout> 
   
          <Tweet />

          <AllTweets />
      
          </TwiterLayout>


      
  );
}
