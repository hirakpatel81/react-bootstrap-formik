import React from "react";
import { FormGroup, FormCheck } from "react-bootstrap";
import { Field } from "formik";
function Checkbox(props) {
  const { label, name, required, ...rest } = props;
  return (
    <FormGroup>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <FormCheck
              id={name}
              name={name}
              label={label}
              {...field}
              {...rest}
              isInvalid={required && meta.error ? true : false}
              feedback={meta.error}
            />
          );
        }}
      </Field>
    </FormGroup>
  );
}

export default Checkbox;
