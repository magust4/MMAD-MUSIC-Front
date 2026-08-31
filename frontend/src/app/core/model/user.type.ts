export interface User {
  username: string;
  profilePicUrl: string | null;
  followers?: User[]; 
  following?: User[];  
}
