import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from './blog.styles.scss'

export default ({ data }) => {
  const linkColor = () => {
    const hue = () => Math.floor(Math.random() * 156) + 90
    let linkColor = `2px solid rgb(${hue()}, ${hue()}, ${hue()})`
    return linkColor
  }

  return (
    <Layout>
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Blog &bull; Puneet Sharma</title>
          <link rel='canonical' href='https://iampuneet.in/blog' />
        </Helmet>
        <Header headerText='Blog' />

        <div className='row'>
          <div className='leftcolumn'>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key='node.id'>
                <div className='card'>
                  <p>
                    <Link
                      to={node.fields.slug}
                      style={{
                        borderBottom: linkColor(),
                        fontSize : '13px',
                        font : 'italic bold 12px/30px Georgia, serif'
                      }}
                    >
                      {node.frontmatter.title}
                    </Link>
                  </p>
                  <p className="datedisplay">{node.frontmatter.date}</p>
                  <p className="datedisplay">{node.frontmatter.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='rightcolumn'>
            <div className='card'>
              <h2>About Me</h2>
              <div className='fakeimg' style={{height: '200px'}} >Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            description
          }
          excerpt
        }
      }
    }
  }
`