import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Box from '@mui/material/Box';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Box>
          {children}
        </Box>
      </body>
    </html>
  );
}