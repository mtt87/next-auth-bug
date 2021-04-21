import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function APIHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // this will throw
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
    signingKey: process.env.NEXTAUTH_SIGNIN_KEY,
    encryptionKey: process.env.NEXTAUTH_ENCRYPTION_KEY,
  });
  // never gets here
  console.log(token);
  res.send('OK');
}
