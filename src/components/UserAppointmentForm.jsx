import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormErrorMessage from "./FormErrorMessage";

export function UserAppointmentForm(props) {
  const { id, name, about, price, description, img } = props.service;

  return (
    <div className="flex-col-center">
      <h3>
        Здравствуйте {props.user.surname} {props.user.name}!
      </h3>
      {props.thisServiceAppointmented ? (
        <Formik
          initialValues={{
            date: props.thisServiceAppointmented.service.date,
            time: props.thisServiceAppointmented.service.time
          }}
          validationSchema={Yup.object({
            date: Yup.string().required("Обязательное поле"),
            time: Yup.string().required("Обязательное поле")
          })}
          onSubmit={() => {
            props.deleteUserAppointment(
              props.api_url,
              props.thisServiceAppointmented.id
            );
          }}
        >
          <Form className="sign-up">
            <label className="sign-up__element">
              Вы записаны на эту дату:
              <br />
              <Field
                disabled
                className="sign-up__input"
                name="date"
                type="date"
              />
            </label>
            <ErrorMessage component={FormErrorMessage} name="date" />

            <label className="sign-up__element">
              На это время:
              <br />
              <Field
                disabled
                className="sign-up__input"
                name="time"
                type="time"
              />
            </label>
            <ErrorMessage component={FormErrorMessage} name="time" />

            <br />
            <Button name="Отменить" />
          </Form>
        </Formik>
      ) : (
        <Formik
          initialValues={{
            date: "",
            time: ""
          }}
          validationSchema={Yup.object({
            date: Yup.string().required("Обязательное поле"),
            time: Yup.string().required("Обязательное поле")
          })}
          onSubmit={values => {
            props.addUserAppointment(
              props.api_url,
              props.user.id,
              values.date,
              values.time,
              id,
              name,
              about,
              price,
              description,
              img
            );
          }}
        >
          <Form className="sign-up">
            <label className="sign-up__element">
              Когда вам удобно прийти?
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
      )}
    </div>
  );
}

UserAppointmentForm.propTypes = {
  service: PropTypes.object,
  user: PropTypes.object,
  thisServiceAppointmented: PropTypes.object,
  deleteUserAppointment: PropTypes.func,
  addUserAppointment: PropTypes.func,
  api_url: PropTypes.string
};
