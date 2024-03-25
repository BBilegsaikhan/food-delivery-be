import { Stack } from "@mui/material";
import { Footer, Header } from ".";
const Layout = ({ children }: { children: any }) => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </Stack>
  );
};
export default Layout;
