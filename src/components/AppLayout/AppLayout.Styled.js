import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateCol};
  grid-template-rows: 100vh;
`;

export const LayoutSide = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
