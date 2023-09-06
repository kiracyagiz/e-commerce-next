import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children } ) {
  return (
    <html lang="en">
      <body className="p-8">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
