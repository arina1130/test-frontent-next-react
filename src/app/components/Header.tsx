"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#1E1E1E",
        padding: "24px 30px",
        px: { xs: "12px", md: "24px" },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "1200px",
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          fontSize="1.5em"
          fontWeight="bold"
          sx={{ color: "#1E1E1E" }}
        >
          Some Company
        </Typography>
        <Link href="/contact" passHref>
          <CustomButton>Contact us</CustomButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
