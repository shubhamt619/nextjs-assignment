'use client';
import "./globals.css";
import "@mantine/core/styles.css";
import { Container, MantineProvider } from '@mantine/core';
import { FavoritesProvider } from '@/app/context/FavouritesContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <FavoritesProvider>
            <Container>
              {children}
            </Container>
          </FavoritesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
