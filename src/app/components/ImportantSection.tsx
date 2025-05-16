import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CustomButton from "./CustomButton";

const items = [
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
];

export default function ImportantSection() {
  return (
    <Box component="section" sx={{ maxWidth: 1200, mx: "auto", py: 4, px: 8, textAlign: "center" }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{ mb: 6, fontWeight: "bold", color: "#0C0C0D" }}
      >
        Also very important title
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {items.map((item, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ textAlign: "left" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1E1E1E", mb: 1 }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#757575" }}>
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <CustomButton>Contact us</CustomButton>
    </Box>
  );
}
