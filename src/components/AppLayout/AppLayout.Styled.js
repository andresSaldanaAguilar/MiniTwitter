import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateCol};
`;

export const LayoutSide = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
