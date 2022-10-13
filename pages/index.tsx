import type { NextPage } from "next";
import Container from "../components/Container";
import Main from "../components/Main";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <Main>
      <Title title="The Great Button Clicker" />
      <Container />
    </Main>
  );
};

export default Home;
