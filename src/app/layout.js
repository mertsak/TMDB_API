import "@/styles/reset.css";
import "@/styles/global.css";
import StoreProvider from "@/redux/storeProvider";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-CF_openSans">
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
