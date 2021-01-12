import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Projects from "../components/projects"
import SideNavigation from "../components/sideNav"
import '../../public/styles/reset.css'

export default function Home() {
  return (
    <div>
      <SideNavigation/>
      <Layout>
        <Portfolio/>
        <Projects />
      </Layout>
    </div>
  );
}
