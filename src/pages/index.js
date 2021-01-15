import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Projects from "../components/projects"
import Work from "../components/work"
// import About from "../components/about"

export default function Home() {
  return (
    <div>
      <Layout>
        <Portfolio />
        <Projects />
        <Work />
        {/* <About /> */}
      </Layout>
    </div>
  );
}
