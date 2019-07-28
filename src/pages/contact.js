import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './contact.module.scss'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Contact &bull; Puneet Sharma</title>
      <link rel='canonical' href='' />
    </Helmet>
    <Header headerText='Contact' />
    <p>
      If you would like to get in touch, email me at{' '}
      <a href='mailto:iampuneet.in@gmail.com'>iampuneet.in@gmail.com</a> or use the contact
      form below.
    </p>
    <p>
      I am also on <a href='https://twitter.com/iampuneet_in'>Twitter</a>,{' '}
      <a href='https://github.com/impuneet'>GitHub</a>, and{' '}
      <a href='https://www.linkedin.com/in/puneet-sharma-888-ps/'>LinkedIn</a>.
    </p>
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      className={styles.contactForm}
    >
      <input type='hidden' name='form-name' value='contact' />
      <label for='name'>Name:</label>
      <input type='text' name='name' required />
      <label for='email'>Email:</label>
      <input type='email' name='email' required />
      <label for='message'>Message:</label>
      <textarea name='message' />
      <input
        type='submit'
        className='submit'
        className={styles.submit}
        name='Submit'
      />
    </form>
  </Layout>
)