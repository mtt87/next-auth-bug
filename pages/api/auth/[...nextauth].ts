import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  // https://next-auth.js.org/configuration/options#json-web-token-options
  jwt: {
    encryption: true,
    secret: process.env.NEXTAUTH_SECRET,
    signingKey: process.env.NEXTAUTH_SIGNIN_KEY,
    encryptionKey: process.env.NEXTAUTH_ENCRYPTION_KEY,
  },
});
