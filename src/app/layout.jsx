import "../../globals.css";

import Navbar from "../components/UI/Navbar";

export const metadata = {
  title: "Bookverse",
  description: "Best Place to Buy Books",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
