import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid black;
  padding: 8px;
  & :hover, & :focus {
    background-color: teal;
  }
  border-radius: ${p=>p.theme.radii.md};
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => {
    return props.theme.colors.accent;
  }};
  & b {
    color: red;
  }
`;
