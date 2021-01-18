import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import CheckboxGroup from "../components/CheckboxGroup";
import Checkbox from "../components/Checkbox";
function Login() {
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    password: Yup.string().required("Password is required"),
    //remember: Yup.bool().oneOf([true], "Field must be checked"),
  });

  const onSubmit = (values) => alert(JSON.stringify(values));
  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 4 }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <Input type="email" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />
                <Checkbox name="remember" label="Remember Me" />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
