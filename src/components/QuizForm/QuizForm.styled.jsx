import {
    Form as FormikForm,
    Field as FormikField,
    ErrorMessage as FormikError,
  } from 'formik';
  import styled from 'styled-components';
  
  export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 320px;
    margin-left: 20px;
  `;
  
  export const Field = styled(FormikField)`
    padding: 4px;
    font: inherit;
  `;
  
  export const FormGroup = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `;
  
  export const ErrorMessage = styled(FormikError)`
    /* color: ${p => p.theme.colors.red}; */
    color: red;
    font-size: 44px;
  `;

