import React from 'react'
import PropTypes from 'prop-types'
import { RegisterInterestTemplate } from '../../templates/register-interest'

const RegisterInterestPreview = ({ entry }) => {

  return (
    <RegisterInterestTemplate
			heading={entry.getIn(['data', 'heading'])}
			tagline={entry.getIn(['data', 'tagline'])}
			emailSignupMessage={entry.getIn(['data', 'emailSignupMessage'])}
			successMessage={entry.getIn(['data', 'successMessage'])}
      image={entry.getIn(['data', 'image'])}
    />
  )
}

RegisterInterestPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default RegisterInterestPreview
