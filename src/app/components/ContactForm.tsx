"use client";
import { TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      router.push(`/response?message=${encodeURIComponent(data.message)}`);
    } catch {
      setError("Произошла ошибка при отправке сообщения.");
    }
  };

  return (
    <Box
      component="section"
      sx={{
        flex: 1,
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderTop: 1,
        borderTopColor: "#D9D9D9",
        borderBottom: 1,
        borderBottomColor: "#D9D9D9",
      }}
    >
      <Typography variant="h3" sx={{ color: "#0C0C0D", mb: 2 }}>
        Only CTA on the page
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          background: "#ffffff",
          px: 4,
          py: 4,
          border: 1,
          borderRadius: "10px",
          borderColor: "#D9D9D9",
        }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows={4}
        />

        <CustomButton
          sx={{
            width: "100%",
            backgroundColor: "#2C2C2C",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#1E1E1E",
            },
            borderRadius: "10px",
            textTransform: "none",
            px: 3,
            py: 1,
            fontSize: "0.9rem",
          }}
          type="submit"
        >
          Submit
        </CustomButton>

        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Box>
  );
}
