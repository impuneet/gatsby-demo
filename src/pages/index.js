import React from 'react'
import Layout from '../components/layout'
import styles from './index.module.scss'
import { Link } from 'gatsby'

export default ({ data }) => {
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


      <p>
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
      <form
        action='https://tinyletter.com/rmorabia'
        method='post'
        target='popupwindow'
        onsubmit="window.open('https://tinyletter.com/rmorabia', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <input
          type='email'
          name='email'
          id='tlemail'
          placeholder='hi@whatever.com'
        />
        <input className='submit' type='submit' value='Subscribe' />
      </form>
      <p>
        If you want to keep up with a less polished version of me, I'm pretty
      active on Twitter at{' '}
        <a href='http://twitter.com/radhikamorabia'>@radhikamorabia</a>.
      </p>
      <p>
        I'm also on <a href='http://linkedin.com/in/rmorabia'>LinkedIn</a> and{' '}
        <a href='http://github.com/rmorabia'>GitHub</a>.
      </p>
      <p>
        <i>
          (Psst! If you're not here for developer stuff, check out my personal
        site: <a href='http://rmorabia.com'>rmorabia.com</a>.)
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
          }
          excerpt
        }
      }
    }
  }
`