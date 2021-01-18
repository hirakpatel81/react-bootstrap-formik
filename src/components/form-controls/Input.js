import React from "react";
import { Field } from "formik";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <React.Fragment>
              <FormControl
                id={name}
                name={name}
                {...field}
                {...rest}
                isInvalid={meta.touched && meta.error ? true : false}
              />
              <FormControl.Feedback type="invalid">
                {meta.error}
              </FormControl.Feedback>
            </React.Fragment>
          );
        }}
      </Field>
    </FormGroup>
  );
}

export default Input;
