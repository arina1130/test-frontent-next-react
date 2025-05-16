"use client";

import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const LiteYouTubeEmbed = dynamic(() => import("react-lite-youtube-embed"), {
  ssr: false,
});

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F5F5F5",
        py: 4,
        px: 8,
        borderTop:1,
        borderTopColor:"#D9D9D9"
      }}
    >
      <Grid
        container
        spacing={4}
        maxWidth="1200px"
        margin="0 auto"
        alignItems="center"
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            sx={{ color: "#0C0C0D", mb: 2 }}
          >
            Most important title on the page
          </Typography>
          <Typography variant="body1" sx={{ color: "#757575" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&rel=0&showinfo=0"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                border: "none",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
