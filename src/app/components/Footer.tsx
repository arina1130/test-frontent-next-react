import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      position="sticky"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          py: 5,
          fontSize: "1.25em",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        Some Company 2025
      </Typography>
    </Box>
  );
}
