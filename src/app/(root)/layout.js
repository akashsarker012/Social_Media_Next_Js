import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { Providers } from "@/providers/providers";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <main className="max-w-6xl mx-auto">
      <Providers>
        <Header />
        {children}
      </Providers>
    </main>
  );
}
