import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormErrorMessage from "./FormErrorMessage";

export function SignInForm(props) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Введите email в формате xxxxxxx@xxxx.xxx")
          .required("Обязательное поле"),
        password: Yup.string()
          .min(4, "Слишком короткий пароль")
          .required("Обязательное поле")
      })}
      onSubmit={values => {
        props.signIn(
          props.api_url_users,
          props.api_url_appointments,
          values.email,
          values.password
        );
      }}
    >
      <Form className="sign-in">
        <label className="sign-up__element">
          Ваш email:
          <br />
          <Field className="sign-in__input" name="email" type="email" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="email" />

        <label className="sign-in__element">
          Ваш пароль:
          <br />
          <Field className="sign-in__input" name="password" type="password" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="password" />

        <br />
        <Button name="Войти" />
      </Form>
    </Formik>
  );
}

SignInForm.propTypes = {
  signIn: PropTypes.func,
  api_url_users: PropTypes.string,
  api_url_appointments: PropTypes.string
};
