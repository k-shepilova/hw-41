import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './App.css';

function App() {
    const [result, setResult] = useState(null);
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(values.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }
    return errors;
  };

  return (
      <div className="App">
          <h1>Register Form</h1>
          <Formik
              initialValues={{name: '', email: '', phone: ''}}
              validate={validate}
              onSubmit={(values, {setSubmitting}) => {
                  setResult(values);
                  setSubmitting(false);
              }}
          >
              {({isSubmitting}) => (
                  <Form>
                      <div className="col">
                          <label htmlFor="name">Name:</label>
                          <Field type="text" name="name"/>
                          <ErrorMessage name="name" component="div" className="err"/>
                      </div>

                      <div className="col">
                          <label htmlFor="email">Email:</label>
                          <Field type="email" name="email"/>
                          <ErrorMessage name="email" component="div" className="err"/>
                      </div>

                      <div className="col">
                          <label htmlFor="phone">Phone:</label>
                          <Field type="text" name="phone"/>
                          <ErrorMessage name="phone" component="div" className="err"/>
                      </div>

                      <button type="submit" disabled={isSubmitting}>
                          Submit
                      </button>
                  </Form>
              )}
          </Formik>
          {result && (
              <div>
                  <h3>Your registration data:</h3>
                  <div>Name: {result.name}</div>
                  <div>Email: {result.email}</div>
                  <div>Phone: {result.phone}</div>
              </div>
          )}
      </div>
  );
}

export default App;
