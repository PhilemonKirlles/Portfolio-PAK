import React, {useState } from "react";
import './App.css';

import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import TopNav from "./components/Nav";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("About");

  const currentPage = () => {
    if (activeTab === "About") return <About />;
    // if (activeTab === "Projects") return <Projects />;
    if (activeTab === "Contact") return <Contact />;
  };
  const changeActiveTab = (tab) => setActiveTab(tab);
  return (
    <Container fluid className="mainContainer">
      <TopNav activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <Hero></Hero>
      {currentPage()}
      <Footer/>
    </Container>
  );
}


export default App;