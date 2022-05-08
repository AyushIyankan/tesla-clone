import React from "react";
import styled from "styled-components";

//Components
import Header from "./Header";
import Section from "./Section";

//data
import data from "../data.json";

function Home() {
  return (
    <Container>
      {/* Header */}
      <Header />
      {/* Sections Mapping */}
      {data.map((prop) => {
        return <Section {...prop} />;
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
