import React from 'react'
import Layout from '../components/layout'
import styles from './index.module.scss'
import { Link } from 'gatsby'
import Header from '../components/header'

export default ({ data }) => {
  const linkColor = () => {
    const hue = () => Math.floor(Math.random() * 156) + 90
    let linkColor = `2px solid rgb(${hue()}, ${hue()}, ${hue()})`
    return linkColor
  }
  return (
    <Layout>
      <h1 className={styles.heading}>
        {'Hi, I\'m'}{' '}
        <div className={styles.rainbowBackground}>
          <span className={styles.name}>Puneet Sharma</span>
        </div>
        .
      </h1>
      <p>I’m a <strong>Full Stack developer</strong>, <strong>designer</strong>, and <strong>chef</strong> from India. I build open source projects and write the missing instruction manuals of the web. </p>
      <p>I created this site to document everything I learn, and share a bit of <a href="https://www.iampuneet.in">myself</a> with the world. This website has no bullshit, no ads, no sponsored posts, and no paywalls. If you enjoy my content, please consider <a href="https://ko-fi.com/iampuneet" target="_blank">supporting what I do.</a></p>
      <Header headerText='Recent Blogs' />
      { data.allMarkdownRemark.edges.map(({ node }) => (
        <div className='blogListing' key='node.id'>
          <div className='blogPost'>
            <p  className='blogHeader'>
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
          <div>
            <p  className={styles.blogDescription} >This is a very short desciptions to the blog and we are touching this mid level description just for example purpose
            </p>
          </div>
        </div>
      ))}
      <p>
        <br/><br/>
        Currently, I work with Angular, React, and Node.js. I'm also learning Microservice Architecture in Lamda.
        Down the line, I'm hoping to gain a good understanding of Javascript and CS
      fundamentals.{' '}
        <Link to={'/blog'}>Read about what I'm learning on my blog.</Link> Usually
        updated weekly.
      </p>
      <p>
        The best way to keep up with what I'm doing is to subscribe to my
        newsletter below. I write about my journey in the tech industry and
        sprinkle in some useful advice.
      </p>
      <section className={styles.newsletterSection} >
        <h2 className={styles.frontPage}>Join the Newsletter</h2>
        <p className={styles.width100}>I write about JavaScript, programming, and front-end design. Join over <strong class="pink">6,000</strong> other developers in keeping up with my content. Unsubscribe whenever. <u>Never any spam, ads, or affiliate links.</u></p>
        <form id="newsletter-form"
          className  = {styles.newsletterForm}
          action='https://tinyletter.com/iampuneet'
          target='popupwindow'
          onsubmit="window.open('https://tinyletter.com/iampuneet', 'popupwindow');return true"
          method="POST">
          <input type='email' name='email'  className={styles.emailInputText}   id='tlemail' placeholder='hi@whatever.com' />
          <input type="submit" name="submit" className={styles.subscribeButton} id="submit-sidebar" value="Submit" /> 
        </form>
      </section>
      <p>
        If you want to keep up with a less polished version of me, I'm pretty
      active on Twitter at{' '}
        <a href='https://twitter.com/iampuneet_in'>@iampuneet_in</a>.
      </p>
      <p>
        I'm also on <a href='https://www.linkedin.com/in/puneet-sharma-888-ps/'>LinkedIn</a> and{' '}
        <a href='https://github.com/impuneet'>GitHub</a>.
      </p>
      <p>
        <i>
          (Psst! If you're not here for developer stuff, check out my personal
        site: <a href='https://iampuneet.in/'>iampuneet.in</a>.)
        </i>
      </p>
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
          }
          excerpt
        }
      }
    }
  }
`