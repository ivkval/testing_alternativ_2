import type { NextPage } from "next";
import Counter from "../components/Counter";
import Main from "../components/Main";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <Main>
      <Title title="The Great Button Clicker" />
      <Counter />
    </Main>
  );
};

export default Home;
