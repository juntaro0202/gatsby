import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      pattern: file(relativePath: { eq: "pattern.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="container">
        <div className="site">
          <a href="base-index.html">
            <img src="/images/logo-w.svg" alt="ESSENTIALS" />
            <p>おいしい食材と食事を探求するサイト</p>
          </a>
        </div>
        <div className="back">
          <Img
            fluid={data.pattern.childImageSharp.fluid}
            alt=""
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </footer>
  )
}
