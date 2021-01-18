import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { FormGroup, FormLabel } from "react-bootstrap";
import { Field, ErrorMessage } from "formik";
import InputError from "./InputError";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <Field name={name}>
        {({ form, field, meta }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              className={`form-control ${
                meta.touched && meta.error ? "is-invalid" : ""
              }`}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={InputError} />
    </FormGroup>
  );
}

export default DatePicker;
