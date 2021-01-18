import React from "react";
import { Field } from "formik";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      {/* <FormControl type="text" /> */}
      <Field name={name} as="textarea">
        {({ field, meta }) => {
          return (
            <React.Fragment>
              <FormControl
                as="textarea"
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

export default Textarea;
