import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import EmailSubmit from '../components/EmailSubmit'

export const RegisterInterestTemplate = ({
  image,
  heading,
	emailSignupMessage,
	tagline
}) => (
  <section className="register">

			<h2 className="has-text-weight-semibold is-size-2">
				{heading}
			</h2>
			<p>{emailSignupMessage}</p>

      <EmailSubmit />

  </section>
)

RegisterInterestTemplate.propTypes = {
  image: PropTypes.string,
  tagline: PropTypes.string,
  heading: PropTypes.string,
  emailSignupMessage: PropTypes.string
}

const RegisterInterest = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout
      image={frontmatter.image}
      tagline={frontmatter.tagline}
      metaDescription={frontmatter.metaDescription}
      >
      <RegisterInterestTemplate

        heading={frontmatter.heading}
        emailSignupMessage={frontmatter.emailSignupMessage}
      />
    </Layout>
  )
}

RegisterInterest.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default RegisterInterest

export const registerInterestQuery = graphql`
  query RegisterInterest($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        tagline
        image
        heading
        metaDescription
        emailSignupMessage
      }
    }
  }
`
