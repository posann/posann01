import "./globals.css";
import Theming from "@/components/providers/Theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#14110F]">
        {children}
      </body>
    </html>
  );
}
