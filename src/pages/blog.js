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
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key='node.id'>
            <section className='articleContainer'>
              <div className='blogPost'>
                <p>
                  <Link
                    to={node.fields.slug}
                    style={{
                      borderBottom: linkColor()
                    }}
                  >
                    {node.frontmatter.title}
                  </Link>
                </p>
                <p>{node.frontmatter.date}</p>
              </div>
            </section>
            <div className = 'articleSideContent'>
                  <div className ='articleTrendingContent'>
                      <p class="trending"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjI5ODggMC43NTg2MzdDMjYuMjk4OCAwLjMzOTY5MSAyNS45NTkxIDAgMjUuNTQwMiAwSDIzLjI2NDVDMjIuOTY0NyAwIDIyLjY5MzIgMC4xNzYzNjcgMjIuNTcxNCAwLjQ1MDA0NkMyMi40NDk0IDAuNzIzNzI1IDIyLjUgMS4wNDMzNSAyMi43MDA1IDEuMjY2MDdMMjMuNDA1MSAyLjA0ODk4TDE0LjI5OTkgNi45MDUxOEwxMC42NTEzIDMuMjU2NjZDMTAuNDMxNCAzLjAzNjc2IDEwLjA5OTQgMi45NzMzNSA5LjgxMzg2IDMuMDk2NzVMMC40NTc1OTcgNy4xNDI3NUMwLjA3MzE2MjUgNy4zMDkwOCAtMC4xMDM4MDYgNy43NTU1MSAwLjA2MjUyODMgOC4xNDAxNUMwLjIyNjQ1NSA4LjUxOTU3IDAuNjgwMTEyIDguNjk5NTUgMS4wNTk5MyA4LjUzNTQyTDkuOTQzMDcgNC42OTM4OEwxMy42MjQ1IDguMzc1NTFDMTMuODYwNyA4LjYxMTY2IDE0LjIyMzQgOC42NjU2NCAxNC41MTggOC41MDgzM0wyNC40NTA5IDMuMjEwOTJMMjQuOTc2NCAzLjc5NDc5QzI1LjIwMDEgNC4wNDM1OSAyNS41NzEzIDQuMTE1ODIgMjUuODcyMiAzLjk2OTM1QzI2LjEzMDcgMy44NDM3NSAyNi4yOTg4IDMuNTc0NjggMjYuMjk4OCAzLjI4NzM2VjAuNzU4NjM3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTI1LjkzMDcgNS4xNjU3MUMyNS43MDIyIDUuMDI4NjcgMjUuNDE4NSA1LjAyMTQ0IDI1LjE4MzMgNS4xNDY4NUwxNC4zIDEwLjk1MTNMMTAuNjUxNyA3LjMwMjc3QzEwLjQzMTYgNy4wODI4NyAxMC4wOTk3IDcuMDE5NDYgOS44MTQxNyA3LjE0Mjg2TDAuNDU3NzE0IDExLjE4ODlDMC4xODAwMjIgMTEuMzA4OCAwLjAwMDI0NDE0MSAxMS41ODI1IDAuMDAwMjQ0MTQxIDExLjg4NTFWMjEuMjQxM0MwLjAwMDI0NDE0MSAyMS42NjA1IDAuMzM5OTM1IDIyIDAuNzU4ODgxIDIySDI1LjU0MDNDMjUuOTU5NCAyMiAyNi4yOTg5IDIxLjY2MDUgMjYuMjk4OSAyMS4yNDEzVjUuODE2MkMyNi4yOTg5IDUuNTQ5NzQgMjYuMTU5MSA1LjMwMjc1IDI1LjkzMDcgNS4xNjU3MVY1LjE2NTcxWk0xLjUxNzUyIDEyLjM4MzVMNC45NTY1NyAxMC44OTYzVjIwLjQ4MjdIMS41MTc1MlYxMi4zODM1Wk02LjQ3Mzg0IDEwLjI0MDJMOS45MTI4OSA4Ljc1MzIzVjIwLjQ4MjlINi40NzM4NFYxMC4yNDAyWk0xMS40MzAyIDEwLjIyN0wxMy42MjQ2IDEyLjQyMTZDMTMuODYwOCAxMi42NTc4IDE0LjIyMzUgMTIuNzExNyAxNC41MTgxIDEyLjU1NDRMMTQuODY5MiAxMi4zNjcyVjIwLjQ4MjlIMTEuNDMwMlYxMC4yMjdaTTE2LjM4NjMgMTEuNTU3OEwxOS44MjUzIDkuNzIzOTVWMjAuNDgyN0gxNi4zODYzVjExLjU1NzhaTTI0Ljc4MTcgMjAuNDgyN0gyMS4zNDI2VjguOTE0OTVMMjQuNzgxNyA3LjA4MDY2VjIwLjQ4MjdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"> Trending Content</p>
                  </div>
            </div>
          </div>
        ))}
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
          }
          excerpt
        }
      }
    }
  }
`
