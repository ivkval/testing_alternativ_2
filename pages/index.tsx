import type { NextPage } from "next";
import Container from "../components/Container";
import Form from "../components/Form";
import Main from "../components/Main";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <Main>
      <Title />
      <Container />
    </Main>
  );
};

export default Home;
