import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const handler=NextAuth({
    providers:[
        
          GoogleProvider({
            clientId:process.env.CLIENT_ID_GOOGLE,
            clientSecret:process.env.CLIENT_SECRET_GOOGLE
        })
    ]
})
export {handler as GET,handler as POST}