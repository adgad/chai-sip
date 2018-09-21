import React from "react";

import 'form.sass';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <form
          className="email-submit"
          name="register-interest"
          method="post"
          action="/email-success"
          data-netlify="true"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="register-interest" />

          <div className="email-form">
            <label htmlFor="email" className="visually-hidden">
                Email address:
            </label>
            <input placeholder="Email address" className="form-input margin-right" type="email" name="email" onChange={this.handleChange} />

              <button className="form-button" type="submit">Register</button>

          </div>
        </form>
    );
  }
}