import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../form-controls/Input";
import RadioButtonGroup from "../form-controls/RadioButtonGroup";
import Select from "../form-controls/Select";
import CheckboxGroup from "../form-controls/CheckboxGroup";
import DatePicker from "../form-controls/DatePicker";
import Textarea from "../form-controls/Textarea";
import Checkbox from "../form-controls/Checkbox";
function Enrollment() {
  const contactOptions = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const courseOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "ASP .Net", value: "aspnet" },
    { key: "Java", value: "java" },
  ];

  const skillsOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactMode: "",
    phone: "",
    course: "",
    skills: [],
    courseDate: null,
    about: "",
    agree: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be minimum 4 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm password is required"),
    contactMode: Yup.string().required("Select a contact mode"),
    phone: Yup.string().when("contactMode", {
      is: "telephonemoc",
      then: Yup.string().required("Phone number is required"),
    }),
    course: Yup.string().required("Please select a course"),
    courseDate: Yup.date().required("select a course date").nullable(),
    about: Yup.string().required("Please tell us about yourself"),
    agree: Yup.bool().oneOf([true], "You must agree"),
  });

  const onSubmit = (values) => {
    //setJsonData(JSON.stringify(values));
    alert(JSON.stringify(values));
  };
  return (
    <Container style={{ marginTop: 20 }}>
      <Row>
        <Col xs={8}>
          <Card>
            <Card.Header>Enrollment</Card.Header>
            <Card.Body>
              <Card.Title>Enter your details</Card.Title>
              <Card.Text>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => (
                    <Form>
                      <Row>
                        <Col>
                          <Input name="name" type="text" label="Full Name" />
                        </Col>
                        <Col>
                          <Input name="email" type="email" label="Email" />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Input
                            name="password"
                            type="password"
                            label="Password"
                          />
                        </Col>
                        <Col>
                          <Input
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <RadioButtonGroup
                            name="contactMode"
                            label="Contact preferences"
                            options={contactOptions}
                          />
                        </Col>
                        <Col>
                          <Input
                            name="phone"
                            type="text"
                            label="Phone Number"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Select
                            name="course"
                            label="Course"
                            options={courseOptions}
                          />
                        </Col>
                        <Col>
                          <CheckboxGroup
                            name="skills"
                            label="Skills"
                            options={skillsOptions}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <DatePicker name="courseDate" label="Course Date" />
                        </Col>
                        <Col>
                          <Textarea
                            name="about"
                            label="Tell us about yourself"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Checkbox
                            required
                            name="agree"
                            label="You agree terms and conditions"
                          />
                        </Col>
                      </Row>
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={!formik.isValid}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Enrollment;
