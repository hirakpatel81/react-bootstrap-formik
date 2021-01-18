import React from "react";
import { Field } from "formik";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <FormGroup>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field as="select" name={name}>
        {({ field, meta }) => {
          return (
            <React.Fragment>
              <FormControl
                as="select"
                id={name}
                {...field}
                {...rest}
                isInvalid={meta.touched && meta.error ? true : false}
              >
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  );
                })}
              </FormControl>
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

export default Select;
