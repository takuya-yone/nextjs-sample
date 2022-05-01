import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getCsrfToken, useSession, signIn, signOut } from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const APIHOST_FASTAPI: string = process.env.NEXT_PUBLIC_APIHOST_FASTAPI
  ? process.env.NEXT_PUBLIC_APIHOST_FASTAPI
  : 'undefined..';

const APIHOST_GOLANG: string = process.env.NEXT_PUBLIC_APIHOST_GOLANG
  ? process.env.NEXT_PUBLIC_APIHOST_GOLANG
  : 'undefined..';

const APICONFIG: string = process.env.NEXT_PUBLIC_APICONFIG
  ? process.env.NEXT_PUBLIC_APICONFIG
  : 'undefined..';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AppBar position="sticky">
          <Toolbar>
            <Typography className="font-mono px-2" sx={{ flexGrow: 1 }}>
              Index - 2022/05/01
            </Typography>
            <Button
              onClick={() => signIn()}
              color="inherit"
              variant="outlined"
              sx={{ my: 1, mx: 1 }}
            >
              <LoginIcon />
              <Typography className="font-mono px-2">Login</Typography>
            </Button>
            <Button
              onClick={() => signOut()}
              color="inherit"
              variant="outlined"
              sx={{ my: 1, mx: 1 }}
            >
              <LogoutIcon />

              <Typography className="font-mono px-2">Logout</Typography>
            </Button>
          </Toolbar>
        </AppBar>

        <main className="flex w-full flex-1  flex-col items-center font-mono justify-center px-20 text-center py-5">
          <h1 className="text-6xl font-mono  py-5">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js! - Index
            </a>
          </h1>
          <p className="mt-6 rounded-md bg-gray-100 p-5 font-mono text-lg">
            APIHOST_FASTAPI: {APIHOST_FASTAPI}
          </p>{' '}
          <p className="mt-6 rounded-md bg-gray-100 p-5 font-mono text-lg">
            APIHOST_GOLANG: {APIHOST_GOLANG}
          </p>
          <p className="mt-6 rounded-md bg-gray-100 p-5 font-mono text-lg">
            APICONFIG: {APICONFIG}
          </p>
          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around  sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="mt-6 w-5/12 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-base">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="mt-6 w-5/12 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-base">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="mt-6 w-5/12 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-base">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="mt-6 w-5/12 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-base">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="flex h-6 w-full items-center justify-center font-mono">
          <a
            className="flex pt-3 items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Home;
