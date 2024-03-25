import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Container, InputBase, Stack, Typography } from "@mui/material";
import { Logo, SearchIcon, BasketIcon, ProfileIcon } from "../icons";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 8,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export const Header = () => {
  const [active, setActive] = useState<number>(1);
  const menu = [
    {
      id: 1,
      title: "НҮҮР",
    },
    {
      id: 2,
      title: "ХООЛНЫ ЦЭС",
    },
    {
      id: 3,
      title: "ХҮРГЭЛТИЙН БҮС",
    },
  ];
  const menuRight = [
    {
      icon: <BasketIcon />,
      title: "Сагс",
    },
    {
      icon: <ProfileIcon />,
      title: "Нэвтрэх",
    },
  ];
  const handleSubmit = (id: number) => {
    setActive(id);
  };
  return (
    <Container>
      <Stack alignItems={"center"} justifyItems={"center"}>
        <Stack
          width="1258px"
          height="57px"
          direction="row"
          px={3}
          py={1}
          justifyContent="space-between"
        >
          <Stack direction={"row"} alignItems="center" gap={3}>
            <Box width="41px" height="41px" px="4.87px" py="7.18px">
              <Logo color="black" />
            </Box>
            <Stack
              direction="row"
              gap={1}
              fontSize="14px"
              fontWeight={700}
              alignItems={"center"}
              justifyItems={"center"}
            >
              {menu.map((e, key) => (
                <Typography
                  fontSize="14px"
                  fontWeight={700}
                  px={2}
                  py={1}
                  key={key}
                  onClick={() => handleSubmit(e.id)}
                  sx={{
                    color: active === e.id ? "#18BA51" : "black",
                    cursor: "pointer",
                  }}
                >
                  {e.title}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Stack direction="row" gap={2}>
            <Box width={260} height={40}>
              <Search sx={{ border: 1, borderColor: "black" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Хайх"
                  // inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            {menuRight.map((e, index) => (
              <Stack
                key={index}
                direction="row"
                gap={1}
                px={2}
                py={1}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                }}
              >
                {e.icon}
                <Typography fontSize="14px" fontWeight={700}>
                  {e.title}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
