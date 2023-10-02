import NextAuth, { User } from 'next-auth';
import { authOptions } from '../../../../../lib/session';
import { AdapterUser } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};




