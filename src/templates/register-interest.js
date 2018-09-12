import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const RegisterInterestTemplate = ({
  image,
  heading,
	description,
	tagline
}) => (
  <section className="section section--gradient">
		<div
			className="full-width-image-container margin-top-0"
			style={{ backgroundImage: `url(${image})` }}
		></div>

		<div class="content">

			<h3 className="has-text-weight-semibold is-size-2">
				{heading} - {tagline}
			</h3>
			<p>{description}</p>

			<form name="contact" method="POST" data-netlify="true" 	action="#">

				<p>
					<label>Your Email: <input type="email" name="email" /></label>
				</p>
				<p>
					<button type="submit">Register</button>
				</p>
			</form>
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
    <Layout>
      <RegisterInterestTemplate
        image={frontmatter.image}
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
  query ProductPage($id: String!) {
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
