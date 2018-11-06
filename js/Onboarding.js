// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { API_URL } from './config'

const Onboarding = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '', bloodType: '', gender: '', orientation: '', dob: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
        axios.post(`${API_URL}/user`, values)
          .then(data => {
            console.log(data)
            setSubmitting(false);
          })
          .catch(err => console.error(err))
        
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" component="div" />
          <label htmlFor="dob">Date of Birth</label>
          <Field type="date" name="dob" />
          <ErrorMessage name="dob" component="div" />
          <label htmlFor="bloodType">Blood Type</label>
          <Field component="select" name="bloodType" placeholder="Blood Type">
            <option value="">Please select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </Field>
          <label htmlFor="gender">Gender</label>
          <Field component="select" name="gender" placeholder="Gender">
            <option value="">Please select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <label htmlFor="orientation">Orientation</label>
          <Field component="select" name="orientation" placeholder="Orientation">
            <option value="">Please select</option>
            <option value="straight">Straight</option>
            <option value="gay">Gay</option>
            <option value="bisexual">Bisexual</option>
            <option value="other">Other</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Onboarding;
