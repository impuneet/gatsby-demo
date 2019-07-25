import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from './projects.module.scss'
import puneetGIF from '../assets/images/puneet.gif'
export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Projects &bull; Puneet Sharma</title>
      <link rel='canonical' href='https://iampuneet.in/projects' />
    </Helmet>
    <Header headerText='Projects' />
    <p>Here is a selection of projects I am currently excited about.</p>
    <p>
      To see a full directory of my code and projects, check out my{' '}
      <a href='http://github.com/rmorabia'>GitHub</a>.
    </p>
    <hr />
    <h2>onebajaj.capital</h2>
    <img src={puneetGIF} alt='' className={styles.width60}/>
    <p>
      <b>Investment Platform :</b> Bajaj Capital is India’s premier investment services group engaged inter-alia in the distribution of mutual funds, insurance, fixed deposits, bonds, loans et al.
    </p>
    <p>
      <a
        className={styles.source}
        href=''
      >
        View Case Study
      </a>
    </p>

    <h2>
      <a href=''>Outgrow (Interactive Calculator & Quizzes)</a>
    </h2>
    <iframe  frameborder="0"  scrolling="no" marginheight="0" marginwidth="0" width="790.32"  height="444"  type="text/html"  src="https://www.youtube.com/embed/1Bkoqqp1lro?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0"> </iframe>
    <p>
      Interactive calculators that boost traffic & conversion.
    </p>
    <p>
      <b>Tech Stack:</b> Node JS , React
    </p>
    <p>
      <a
        className={styles.source}
        href='https://github.com/rmorabia/github-repo-search'
      >
        View Source
      </a>
    </p>

    <h2>
      <a href='http://radtimeline.herokuapp.com/'>Timeline</a>
    </h2>
    <Img fluid={data.timeline.childImageSharp.fluid} alt='' />
    <p>
      Timeline app featuring the ability to see events based on category, to see
      future or past events, and to mark an event as attended or not. Uses
      self-made event API with request validation on the back-end.
    </p>
    <p>
      <b>Tools Used:</b> React, Node.js, Express, JavaScript, and CSS
    </p>
    <p>
      <a className={styles.source} href='https://github.com/rmorabia/timeline'>
        View Source
      </a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    radhika: file(relativePath: { eq: "assets/images/dev.png" }) {
      childImageSharp {
        fluid(maxWidth: 1347, maxHeight: 619) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    github: file(relativePath: { eq: "assets/images/githubreposearch.png" }) {
      childImageSharp {
        fluid(maxWidth: 1550, maxHeight: 832) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    timeline: file(relativePath: { eq: "assets/images/timeline.png" }) {
      childImageSharp {
        fluid(maxWidth: 1552, maxHeight: 830) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
