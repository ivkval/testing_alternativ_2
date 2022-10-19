import type { NextPage } from "next";
import CounterContainer from "../components/CounterContainer";
import Main from "../components/Main";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <Main>
      <Title title="The Great Button Clicker" />
      <CounterContainer />
    </Main>
  );
};

export default Home;
