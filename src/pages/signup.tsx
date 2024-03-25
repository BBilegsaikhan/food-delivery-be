import { Signup } from "@/components/signup";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      py={4}
      mt="55px"
      mb="100px"
    >
      <Signup />
    </Stack>
  );
};
export default Page;
