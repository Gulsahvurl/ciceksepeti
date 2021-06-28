import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Home;
