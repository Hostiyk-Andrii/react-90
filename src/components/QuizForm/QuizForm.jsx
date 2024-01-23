import { Formik} from 'formik';
import { Form, Field, FormGroup, ErrorMessage } from './QuizForm.styled';

export const QuizForm = () => {
  return (
    <Formik
      initialValues={{
        topic: '',
        time: 0,
        questions: 0,
        level: 'beginer',
      }}
    >
      <Form>
        <FormGroup>
          Topic
          <Field name="topic" />
        </FormGroup>
        <FormGroup>
          Time
          <Field name="time" type="number" />
        </FormGroup>
        <FormGroup>
          Questions
          <Field name="questions" type="number" />
        </FormGroup>
      </Form>
    </Formik>
  );
};
