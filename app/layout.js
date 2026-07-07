import './globals.css';

export const metadata = {
  title: 'Sudoku Games',
  description: 'Welcome to the most exciting video game store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/svg" href="/assets/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
