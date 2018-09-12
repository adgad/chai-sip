import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import EmailSubmit from '../components/EmailSubmit'

export const RegisterInterestTemplate = ({
  image,
  heading,
	description,
	tagline
}) => (
  <section className="register">


		<div className="content">

			<h2 className="has-text-weight-semibold is-size-2">
				{heading}
			</h2>
			<p>{description}</p>

      <EmailSubmit />

		</div>
  </section>
)

RegisterInterestTemplate.propTypes = {
  image: PropTypes.string,
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string
}

const RegisterInterest = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout
      image={frontmatter.image}>
      <RegisterInterestTemplate

        tagline={frontmatter.tagline}
        heading={frontmatter.heading}
        description={frontmatter.description}
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
        description
      }
    }
  }
`
