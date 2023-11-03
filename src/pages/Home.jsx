import React from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Button from "@mui/material/Button";
import Jiras from "../components/Jiras";
import JiraForm from "../components/JiraForm/JiraForm";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          textAlign={"left"}
          marginTop={5}
          style={{ fontSize: 25 }}
        >
          Welcome!
        </Typography>

        <Typography
          variant="h5"
          textAlign={"center"}
          marginTop={5}
          style={{ fontWeight: 700 }}
        >
         JIRAS
        </Typography>
        <Divider sx={{ marginTop: 2 }} />
        <Grid sx={{ marginTop: 2 }}>
          <Button variant="contained" href="/create">Create Jira</Button>
        </Grid>
        <Jiras />
      </Container>
    </>
  );
}
