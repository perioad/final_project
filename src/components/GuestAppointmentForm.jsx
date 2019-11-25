import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormErrorMessage from "./FormErrorMessage";

export function GuestAppointmentForm(props) {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        phone: "",
        date: "",
        time: ""
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
        date: Yup.string().required("Обязательное поле"),
        time: Yup.string().required("Обязательное поле")
      })}
      onSubmit={values => {
        props.addGuestAppointment(
          props.api_url,
          values.name,
          values.surname,
          values.phone,
          values.date,
          values.time,
          props.serviceName
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
          Когда вам удобно прийти:
          <br />
          <Field className="sign-up__input" name="date" type="date" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="date" />

        <label className="sign-up__element">
          В какое время?
          <br />
          <Field className="sign-up__input" name="time" type="time" />
        </label>
        <ErrorMessage component={FormErrorMessage} name="time" />

        <br />
        <Button name="Записаться" />
      </Form>
    </Formik>
  );
}

GuestAppointmentForm.propTypes = {
  api_url: PropTypes.string,
  serviceName: PropTypes.string,
  addGuestAppointment: PropTypes.func
};
