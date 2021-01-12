import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Projects from "../components/projects"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/styles/reset.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <Portfolio/>
        <Projects />
      </Layout>
    </div>
  );
}
