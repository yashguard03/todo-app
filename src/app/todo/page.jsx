"use client";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { object, string } from "yup";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { setTodo } from "../reducer/todo/todoSlice";
import { useSelector } from "react-redux";

const Todo = () => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const { tasks } = useSelector((store) => store.todo);

  console.log(tasks);

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
    <div className={`py-5 vh-100 bg-secondary bg-opacity-25`}>
      <Container>
        <Row className={`align-items-center justify-content-between`}>
          <Col lg={4}>
            <Form validated={validated} onSubmit={validation.handleSubmit}>
              <div className={`position-relative`}>
                <Form.Control
                  name="taskName"
                  type="text"
                  placeholder="Enter the todo list"
                  className={`fs-16 fw-semibold rounded-3 border common-box-shadow py-2`}
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
          {/* <Col lg={4}>
            <Form validated={validated} onSubmit={validation.handleSubmit}>
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
          </Col> */}
        </Row>
        <Table className={`mt-5 mb-3 align-middle`} responsive>
          <tbody>
            {tasks.length > 0
              ? tasks?.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td className={`ps-3 py-3 rounded-start-5 bg-white`}>
                        <span
                          className={`text-capitalize text-truncate fs-18 fw-semibold d-block`}
                        >
                          {ele.taskName}
                        </span>
                      </td>
                      <td className={`ps-3 py-3 text-center`}>
                        <button className={`btn p-0 border-0`}>
                          <i
                            className={`ri-delete-bin-5-fill text-danger cursor-pointer fs-5 fw-medium`}
                          ></i>
                        </button>
                      </td>
                      <td className={`ps-3 py-3 text-center rounded-end-5`}>
                        <button className={`btn p-0 border-0`}>
                          <i
                            className={`ri-file-edit-fill text-primary cursor-pointer fs-5 fw-medium`}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
        {/* <Row
          className={`common-box-shadow border rounded-4 py-3 mt-5 bg-white`}
        >
          <Col lg={6} className={``}>
            <span className={`d-block bg-danger`}>Yash</span>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Todo;
