import React from "react";
import PropTypes from "prop-types";
import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";

export function Sign(props) {
  return (
    <section className="sign">
      <div className="container">
        <div className="sign__inner">
          <SignUpForm
            api_url_users={props.api_url_users}
            api_url_appointments={props.api_url_appointments}
            signUp={props.signUpAction}
            phoneRegex={props.phoneRegex}
          />
          <SignInForm
            api_url_users={props.api_url_users}
            api_url_appointments={props.api_url_appointments}
            user={props.user}
            signIn={props.signInAction}
          />
        </div>
      </div>
    </section>
  );
}

Sign.propTypes = {
  api_url_appointments: PropTypes.string,
  api_url_users: PropTypes.string,
  user: PropTypes.object,
  signInAction: PropTypes.func,
  signUpAction: PropTypes.func
};
