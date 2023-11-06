import React from "react";
import { Container, Grid } from "@mui/material";
import Create from "./Create";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid sx={{ marginTop: 2 }}>
          <Create />
        </Grid>
      </Container>
    </>
  );
}
