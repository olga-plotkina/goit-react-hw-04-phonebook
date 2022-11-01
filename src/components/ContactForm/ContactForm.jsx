import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';

import { FormBox } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});
const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = ({ submitProp }) => {
  const handleSubmit = (values, { resetForm }) => {
    submitProp(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormBox>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </FormBox>
    </Formik>
  );
};
