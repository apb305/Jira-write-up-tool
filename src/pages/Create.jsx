import React from "react";
import JiraForm from "../components/JiraForm/JiraForm";
import { Typography, Divider, Container } from "@mui/material";

export default function Create() {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          textAlign={"center"}
          marginTop={5}
          style={{ fontWeight: 700 }}
        >
          Create a JIRA
        </Typography>
        <Divider sx={{ marginTop: 2 }} />
        <JiraForm />
      </Container>
    </div>
  );
}
