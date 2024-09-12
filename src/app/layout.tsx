import { theme } from '@/styles';
import '@/styles/globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: 'Architect Next App',
  description: 'Testing a new Architecture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&family=SUSE:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <ColorSchemeScript
          defaultColorScheme="light"
          forceColorScheme="light"
        />
      </head>
      <body>
        <StoreProvider>
          <MantineProvider
            theme={theme}
            defaultColorScheme="light"
            forceColorScheme="light"
          >
            {children}
          </MantineProvider>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            newestOnTop
            theme="light"
            transition={Slide}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
