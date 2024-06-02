import { Inter } from "next/font/google";
import "./globals.css";
import { getDocuments } from "./lib/doc.js";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const allDocument = getDocuments();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div class="h-full lg:ml-72 xl:ml-80">
          <Header docs={allDocument} />
          {children}
        </div>
      </body>
    </html>
  );
}
