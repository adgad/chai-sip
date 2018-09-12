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
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="register-interest" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label className="form-label">
                Email:
            </label>
              <input className="form-input" type="email" name="email" onChange={this.handleChange} />

          </p>

          <p>
            <button className="form-button" type="submit">Register</button>
          </p>
        </form>
    );
  }
}