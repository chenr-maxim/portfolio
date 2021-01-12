import React from "react"
import LayoutStyles from "../../public/styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <>
      <div className={LayoutStyles.singlecolumn}>
        {children}
      </div>
    </>
  )
}