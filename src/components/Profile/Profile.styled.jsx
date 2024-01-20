import styled from 'styled-components';
const getBorderColor = props => {
  switch (props.$rank) {
    case 'novice':
      return 'green';
    case 'intermediate':
      return 'blue';
    case 'expert':
      return 'orange';
    default:
      return 'black';
  }
 
};

export const Card = styled.div`
  border: 1px solid ${getBorderColor};
  /* padding: 8px; */
  padding: ${p => p.theme.spacing(2)};
  & :hover,
  & :focus {
    background-color: teal;
  }
  border-radius: ${p => p.theme.radii.md};
`;

export const Text = styled.p`
  margin-top: 0;
  /* margin-bottom: 8px; */
  margin-bottom: ${p => p.theme.spacing(2)};
  color: ${props => {
    return props.theme.colors.accent;
  }};
  & b {
    color: red;
  }
`;
