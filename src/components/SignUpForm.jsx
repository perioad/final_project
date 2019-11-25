import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormErrorMessage from "./FormErrorMessage";

export function SignUpForm(props) {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: ""
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Слишком мало символов")
          .max(10, "Слишком много символов")
          .required("Обязательное поле"),
        surname: Yup.string()
          .min(4, "Слишком мало символов")
          .max(10, "Слишком много символов")
          .required("Обязательное поле"),
        phone: Yup.string()
          .matches(props.phoneRegex, "Введите телефон в формате 8(xxx)xxxxxxx")
          .required("Обязательное поле"),
        email: Yup.string()
          .email("Введите email в формате xxxxxxx@xxxx.xxx")
          .required("Обязательное поле"),
        password: Yup.string()
          .min(4, "Слишком короткий пароль")
          .required("Обязательное поле")
      })}
      onSubmit={values => {
        props.signUp(
          props.api_url_users,
          values.name,
          values.surname,
          values.phone,
          values.email,
          values.password
        );
      }}
    >
      <Form className="sign-up">
        <label className="sign-up__element">
          Ваше имя:
          <br />
          <Field className="sign-up__input" name="name" type="text" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="name" />

        <label className="sign-up__element">
          Ваша фамилия:
          <br />
          <Field className="sign-up__input" name="surname" type="text" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="surname" />

        <label className="sign-up__element">
          Ваш телефон:
          <br />
          <Field className="sign-up__input" name="phone" type="text" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="phone" />

        <label className="sign-up__element">
          Ваш email:
          <br />
          <Field className="sign-up__input" name="email" type="email" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="email" />

        <label className="sign-up__element">
          Придумайте пароль:
          <br />
          <Field className="sign-up__input" name="password" type="password" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="password" />

        <br />
        <Button name="Зарегистрироваться" />
      </Form>
    </Formik>
  );
}

SignUpForm.propTypes = {
  signUp: PropTypes.func,
  api_url_users: PropTypes.string
};
