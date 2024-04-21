import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Compilador",
  description: "compilador de codigo personalizado y traductor de codigo C a mi lenguaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ backgroundColor: '#1E212D' }} className={inter.className}>
        <Header />  
        {children}
      </body>
    </html>
  );
}