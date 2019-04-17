
import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

// import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <Link to={'/'}>
            <h3>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

export default Layout
