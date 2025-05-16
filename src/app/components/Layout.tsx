"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box
        component="main"
        sx={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
