
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; 
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";



// import axios from "axios";

 export const AuthContext = createContext()
 const googleProvider = new GoogleAuthProvider();
 const auth = getAuth(app)


const AuthProvider = ({children}) => {
       const [user, setUser] = useState(null);
       const [loading , setLoading] = useState(true);


       



        const createUser = ( email,password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password)
      } 

       const signIn = (email,password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
      }

        const logOut = () =>{
            setLoading(true);
            return signOut(auth);
      }

      const  signInGoogle = () =>{
            setLoading(true)
            return signInWithPopup(auth,googleProvider)

      }


       useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth,currenUser =>{
        const userEmail = currenUser?.email || user?.email;
        const loggedUser = {email: userEmail};
        console.log(loggedUser)
        setUser(currenUser);
        console.log('current user', currenUser);
        setLoading(false)
     
 });
                
            return () =>{
                  return unsubscribe();
            }
      },[])
     
     

      const authInfo = {
            user,
            createUser ,
            signIn,
            loading,
            logOut,
            signInGoogle
      }
      return (
            <AuthContext.Provider value={authInfo}>
                {children}  
            </AuthContext.Provider>
      );
};

export default AuthProvider;