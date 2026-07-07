import './globals.css';
import Providers from '../components/Providers';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export const metadata = {
  title: 'Sudoku Games | Pro Gaming Hub',
  description: 'Premium LAN Experience & Pro Hardware Shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className="bg-carbon text-white font-inter antialiased overflow-x-hidden">
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
