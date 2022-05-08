import React from "react";
import styled from "styled-components";
import Section from "./Section";

import data from "./data.json";

function Home() {
  return (
    <Container>
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
