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
      <meta name="google-site-verification" content="7jBjfenjp4Lz2E2kUVj1V260CUmibcXulcrEQPolsGQ" />
      <title>Projects &bull; Puneet Sharma</title>
      <link rel='canonical' href='https://iampuneet.in/projects' />
    </Helmet>
    <Header headerText='Projects' />
    <p>Here is a selection of projects I am currently excited about.</p>
    <p>
      To see a full directory of my code and projects, check out my{' '}
      <a href='https://github.com/impuneet'>GitHub</a>.
    </p>
    <hr />
    <h2>
      <a href='https://onebajaj.capital'>Onebajaj.Capital</a>
    </h2>
    <img src={puneetGIF} alt='' className={styles.width60}/>
    <p>
      <b>Investment Platform :</b> Bajaj Capital is India’s premier investment services group engaged inter-alia in the distribution of mutual funds, insurance, fixed deposits, bonds, loans et al.
    </p>
    <p>
      <a
        className={styles.source}
        href='https://www.onebajaj.capital/'
      >
        View Case Study
      </a>
    </p>
    <h2>
      <a href='https://outgrow.co/'>Outgrow (Interactive Calculator & Quizzes)</a>
    </h2>
    <iframe  frameborder="0"  scrolling="no" marginheight="0" marginwidth="0" width="790.32"  height="444"  type="text/html"  src="https://www.youtube.com/embed/1Bkoqqp1lro?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0"> </iframe>
    <p>
      <b>About : </b>Interactive calculators that boost traffic & conversion.
    </p>
    <p>
      <b>Tech Stack:</b> Node JS ,Angular, MongoDB ,Micro Service Architecture Serverless ,DynamoDB 
    </p>
    <p>
      <a
        className={styles.source}
        href='https://www.producthunt.com/posts/outgrow-co'
      >
        View Case Study
      </a>
    </p>
    <h2>
      <a href='https://seic.com'>SEI Wealth Platform</a>
    </h2>
    <iframe  frameborder="0"  scrolling="no" marginheight="0" marginwidth="0" width="790.32"  height="444"  type="text/html"  src="https://www.youtube.com/embed/iM9ESiXQFwM?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0"> </iframe>
    <p>
      <b>About : </b>The SEI Wealth Platform (the Platform) is an outsourcing solution for wealth managers encompassing wealth processing services and wealth management programs, combined with business process expertise.
    </p>
    <p>
      <b>Tools Used:</b> Angular JS 1.6,Java (Struts Framework),Node JS
    </p>
    <p>
      <a className={styles.source} href=''>
        View Case Study
      </a>
    </p>
    <h2>
      <a href='https://neta.co.in/'>NETA App</a>
    </h2>
    <iframe  frameborder="0"  scrolling="no" marginheight="0" marginwidth="0" width="790.32"  height="444"  type="text/html"  src="https://www.youtube.com/embed/AHmZf4zXKGA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0"> </iframe>
    <p>
      <b>About : </b>The app was launched on August 24, 2018, in the national capital with former president Pranab Mukherjee as chief guest, and former chief election commissioners S.Y. Quraishi and Nasim Zaidi in attendance.
    </p>
    <p>
      <b>Tools Used:</b> Node JS ,Micro-Services,MongoDB,React JS,Lambda,Javascript 
    </p>
    <p>
      <a className={styles.source} href=''>
        View Case Study
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
