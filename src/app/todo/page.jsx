"use client";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { object, string } from "yup";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { setTodo } from "../reducer/todo/todoSlice";

const Todo = () => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const todoSchema = object({
    taskName: string().required("Please enter the list"),
  });

  const validation = useFormik({
    initialValues: {
      taskName: "",
    },
    validationSchema: todoSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      setValidated(true);
      dispatch(setTodo(values));
      setTimeout(() => {
        setValidated(false);
      }, 500);
    },
  });
  return (
    <div className={`paddingY`}>
      <Container>
        <Col lg={4} className={`mx-auto`}>
          <Form validated={validated} onSubmit={validation.handleSubmit}>
            <Form.Label className={`ms-1 fs-16 fw-bold text-capitalize`}>
              Add List
            </Form.Label>
            <div className={`position-relative`}>
              <Form.Control
                name="taskName"
                type="text"
                placeholder="Enter the todo list"
                className={`fs-16 fw-semibold border border-2 rounded-3`}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.taskName}
              />
              <button
                type="submit"
                className={`border-0 btn p-0 text-capitalize fs-14 fw-semibold position-absolute end-0 top-0 h-100 pe-2`}
              >
                <i
                  className={`${
                    validated ? "d-none" : "d-block"
                  } ri-add-line fs-5 fw-bold add-button text-dark text-opacity-75 transition`}
                ></i>
              </button>
            </div>
            {validation.errors.taskName && validation.touched.taskName ? (
              <p
                className={`text-capitalize text-danger fw-semibold fs-14 ms-1 mt-1`}
                style={{ fontSize: "13px" }}
              >
                {validation.errors.taskName}
              </p>
            ) : null}
          </Form>
        </Col>
        <div className={`todo-box rounded-4 mx-auto mt-5`}></div>
      </Container>
    </div>
  );
};

export default Todo;
