import { theme } from '@/styles';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

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
      <Head>
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
      </Head>
      <body>
        <MantineProvider
          theme={theme}
          defaultColorScheme="light"
          forceColorScheme="light"
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
