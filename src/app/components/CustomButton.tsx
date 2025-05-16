'use client';

import { Button, ButtonProps } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        width: { xs: "120px", md: "200px" },
        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
        height:"31px",
        backgroundColor: "#2C2C2C",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#1E1E1E",
        },
        borderRadius: "10px",
        textTransform: "none",
        px: 3,
        py: 1,
      }}
      {...props}
    />
  );
}
