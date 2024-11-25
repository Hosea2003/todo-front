import { BASE_URL } from "@/service/api";
import { PairToken, SessionToken } from "@/types/user";
import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{
                    label:"Email",
                    type:"email"
                },
                password:{
                    label:"Password",
                    type:"password"
                }
            },
            async authorize(credentials){
                try{
                    const response = await axios.post<PairToken>(BASE_URL+"/user/login",{
                        email:credentials?.email,
                        password:credentials?.password
                    })
                    const data = response.data
                    if(response.status===200){
                        return {
                            id:data.user._id,
                            accessToken:data.accessToken,
                            refreshToken:data.refreshToken,
                            email:data.user.email,
                            
                        }
                    }
                    return null
                }
                catch(error:any){
                    console.log(error.response.data)
                    throw new Error("Authorization failed")
                }
            }
        })
    ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.email = user.email
                token.id = user.id
                token.accessToken = user.accessToken
                token.refreshToken = user.refreshToken

            }
            return token
        },
        async session({session, token}){
            const _token = token as SessionToken
            session.id = _token.id
            session.accessToken=_token.accessToken
            session.refreshToken=_token.refreshToken
            session.email = _token.email
            return session
        }
    },
    pages:{
        signIn:"/login",
        error:"/login"
    }
})

export {handler as GET, handler as POST}