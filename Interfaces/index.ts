export interface User {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    profileImageUrl: string;
    tweets : [Tweet]
    followers : [User]
    following  : [User]
    recommendedUser : [User]
  }

export interface getCurrentUserData {
    getCurrentUser : User
} 


export interface  Tweet {
  author: User ; 
  content: string ; 
  id: string ; 
  imageURL?: string ; 
 
  
}

export interface alltweetDatatype {
  getAllTweets : [Tweet]
}

export   interface CreateTweetData{
    
  content : string 
  imageURL? : string
}