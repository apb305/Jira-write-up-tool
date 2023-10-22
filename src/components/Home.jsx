import React from "react";
import { Container } from "react-bootstrap";
import JiraForm from "./JiraForm";

export default function Home() {
  return (
    <Container>
      <h2 className="text-center mt-3">Jiras</h2>
      <JiraForm/>
    </Container>
  );
}
