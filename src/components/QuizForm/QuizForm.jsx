import { Formik, Field, Form } from 'formik';

export const QuizForm = () => {
  return (
   
      <Formik>
        initialValues=
        {{
          topic: '',
          time: 0,
          questions: 0,
          level: 'beginer',
        }}

        <Form>
            <label>Topic
                <Field name="topic" />
            </label>
            <label>Time
                <Field name="time" type="number" />
            </label>
            <label>Questions
                <Field name="questions" type="number" />
            </label>
        </Form>
      </Formik>
    
  );
};
