import NextAuth, { User } from 'next-auth';
import { authOptions } from '../../../../../lib/session';
import { AdapterUser } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    // jwt:{
    //         encode:({secret,token})=>{

    //         },
    //         decode:async({secret,token})=>{

    //         }
    //     },
        theme:{
            colorScheme: 'light',
            logo: '/log.png'
        },
        callbacks:{
            async session({session}){
                return session;
            },
            async signIn({user}:{user : AdapterUser | User}){
                try{
                    return true;
                } 
                catch(e)
                {
                    console.log(e);
                    return false;
                }
            }
        }
});

export {handler as GET, handler as POST};




