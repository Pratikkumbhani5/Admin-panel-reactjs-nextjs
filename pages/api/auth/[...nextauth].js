import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/login`,
          {
            email,
            password,
          }
        );

        return user.data;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // console.log(user, "user");
        // console.log(token, "token");
        token = user;
        // all of the user data is being logged, yet how to pass it down to session callback so i can use all the user data in the client?
      }

      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      // session callback is called whenever a session for that particular user is checked
      // in above function we created token.user=user
      // console.log(token, "op");

      const t = new Date(token.expTime * 1000).toISOString();

      session.expires = t;
      session.user = token;
      session.user.exp = token.expTime;

      // you might return this in new version
      return Promise.resolve(session);
    },
  },
  // secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
