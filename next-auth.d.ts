import { Session as NextAuthSession, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth"{
    interface Session{
        id:string,
        email:string,
        accessToken:string,
        refreshToken:string
    }
    interface JWT extends Session{}
    interface User{
        id:string,
        email:string,
        accessToken:string,
        refreshToken:string
    }
}