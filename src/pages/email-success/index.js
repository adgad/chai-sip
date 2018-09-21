import React from 'react'

import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const EmailSuccess = ({ data }) => {
    const { frontmatter } = data.allMarkdownRemark.edges[0].node

    return (
    <Layout
        image={frontmatter.image}
        tagline={frontmatter.tagline}>
          <p>{frontmatter.successMessage}</p>

      </Layout>
    )
  }


  EmailSuccess.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }

  export const emailSuccessQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq:"register-interest"}}}) {
      edges {
        node {
          id
          frontmatter {
            tagline
            image
            heading
            emailSignupMessage
            successMessage
          }
        }
      }
    }
  }
  `


export default EmailSuccess
