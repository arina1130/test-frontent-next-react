"use client";
import { useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function ResponsePage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ color: "#0C0C0D", mb: 4 }}>
        {message || "Thank you! Your message has been sent."}
      </Typography>

      <Link href="/">
        <CustomButton>Return to home</CustomButton>
      </Link>
    </Box>
  );
}
