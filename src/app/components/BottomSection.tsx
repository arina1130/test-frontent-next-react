"use client";

import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

export default function BottomSection() {
  return (
    <Box
      component="section"
      sx={{
        mx: "auto",
        py: 6,
        px: 8,
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        borderTop: 1,
        borderTopColor: "#D9D9D9",
        borderBottom: 1,
        borderBottomColor: "#D9D9D9",
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ mb: 6, fontWeight: "bold", color: "#0C0C0D" }}
      >
        Less important title
      </Typography>

      <CustomButton>Contact us</CustomButton>
    </Box>
  );
}
