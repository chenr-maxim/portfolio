import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Projects from "../components/projects"
import Work from "../components/work"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/styles/reset.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <Portfolio/>
        <Projects />
        <Work />
      </Layout>
    </div>
  );
}
