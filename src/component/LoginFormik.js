import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default () => {
  const handelSubmit = (values) => {
    console.log(`${values.email}  ${values.password}`);
  };
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("This field is required").email("bad email"),
    password: Yup.string().required("This field is required").min(5),
  });
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{
        email: "geylert@gamil.com",
        password: "12345",
      }}
      onSubmit={handelSubmit}
      render={() => {
        return (
          <Form>
            <div className="form-group">
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    />
  );
};
