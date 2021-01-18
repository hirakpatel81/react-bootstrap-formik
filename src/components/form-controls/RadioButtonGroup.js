import React from "react";
import { FormGroup, FormCheck, FormLabel } from "react-bootstrap";
import { Field, ErrorMessage } from "formik";
import InputError from "./InputError";
function RadioButtonGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <Field name={name}>
        {({ field, meta }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <FormCheck
                  type="radio"
                  label={option.key}
                  {...field}
                  {...rest}
                  name={name}
                  id={name}
                  value={option.value}
                  checked={field.value === option.value}
                  isInvalid={meta.touched && meta.error ? true : false}
                ></FormCheck>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={InputError} />
    </FormGroup>
  );
}

export default RadioButtonGroup;
