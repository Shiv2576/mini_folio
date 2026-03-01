import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { seo } from "../data/data";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: `${seo.title}`,
  icons: { icon: [{ url: "/favicon.png" }] },
  description: `${seo.description}`,
  keywords: `${seo.keywords}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-auto">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="w-full md:w-[750px] m-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
