import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Checkbox,
  Input,
  OutlinedInput,
  FormControl,
  FormGroup,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack p={4} width={"450px"} height={"720px"} alignItems={"center"} gap={6}>
      <Typography fontSize={"28px"} fontWeight={700} color={"#0D1118"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={2} width={"384px"}>
        <FormGroup>
          <FormControl>
            <Typography fontSize={"14px"}>Нэр</Typography>
            <TextField
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Нэрээ оруулна уу"
            />
          </FormControl>
          <FormControl>
            <Typography fontSize={"14px"}>И-мэйл </Typography>
            <TextField
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </FormControl>
          <FormControl>
            <Typography mb={1} fontSize={"14px"}>
              Хаяг
            </Typography>
            <TextField
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Та хаягаа оруулна уу"
            />
          </FormControl>
          <FormControl>
            <Typography fontSize={"14px"}>Нууц үг</Typography>
            <OutlinedInput
              sx={{
                backgroundColor: "#F7F7F8",
                borderColor: "#ECEDF0",
              }}
              placeholder="Нууц үгээ оруулна уу"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>
          <FormControl>
            <Typography fontSize={"14px"}>Нууц үг давтах</Typography>
            <OutlinedInput
              sx={{
                backgroundColor: "#F7F7F8",
                borderColor: "#ECEDF0",
              }}
              placeholder="Нууц үгээ оруулна уу"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>
        </FormGroup>
      </Stack>
      <Stack p={4} gap={4}>
        <Stack direction={"row"} pr={4} py={2} gap={2} alignItems={"center"}>
          <Checkbox
            defaultChecked
            sx={{
              color: "#161616",
              "&.Mui-checked": {
                color: "#161616",
              },
            }}
          />
          <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
        </Stack>
        <Stack
          height={"48px"}
          width={"384px"}
          px={2}
          py={1}
          border={1}
          borderRadius={1}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"#EEEFF2"}
          borderColor={"white"}
          color={"rgba(28, 32, 36, 0.24)"}
          sx={{ cursor: "pointer" }}
        >
          Бүртгүүлэх
        </Stack>
      </Stack>
    </Stack>
  );
};
