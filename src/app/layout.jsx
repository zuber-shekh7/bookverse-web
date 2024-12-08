import "../../globals.css";

export const metadata = {
  title: "Bookverse",
  description: "Best Place to Buy Books",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
