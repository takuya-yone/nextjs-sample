import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: 'nextjs-dev',
      clientSecret: 'V4GDYX2fRFe6f7QDxJUkhpuWV9CkUFgD',
      issuer: 'http://localhost:8080/auth/realms/nextjs',
    }),
  ],
});
