import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Kind Of Blog</h1>
        <h2>We Have {data.allContentfulPost.totalCount} posts</h2>
        {data.allContentfulPost.edges.map(({ node }) => (
          <article key={node.id}>
            <h3>{node.title}</h3>
            <h5>posted by: {data.contentfulPerson.name}</h5>
            <img style={{ width: 200, height: 200 }} src={data.contentfulPerson.avatar.file.url} alt='' />
            <p>{node.text.text}</p>
            <span>Create At {node.createdAt}</span>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulPost(sort: {fields: [id], order: ASC}) {
    totalCount
    edges {
      node {
        id
        title
        text {
          text
        }
        createdAt(formatString: "DD MMMM, YYYY")
      }
    }
  }
  contentfulPerson {
    name
    avatar {
      file {
        url
        fileName
        contentType
      }
    }
  }
}
`
