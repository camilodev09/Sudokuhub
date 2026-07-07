import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "mock-google-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-google-secret",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "mock-facebook-id",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "mock-facebook-secret",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "gamer@sudoku.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Mock user for local login
        if (credentials.email === "admin@sudoku.com" && credentials.password === "cyberpunk2077") {
          return { id: "1", name: "Admin User", email: "admin@sudoku.com", image: "https://images.unsplash.com/photo-1566492031522-8730999966b4?ixlib=rb-4.0.3&w=100&h=100&fit=crop" };
        }
        
        // Return null if user data could not be retrieved
        return null;
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "mock-secret-for-sandbox",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
