import styled from 'styled-components';

export const InputText = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  color: rgb(75, 75, 75);
  margin: 8px 0;
  display: inline-block;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  color: white;
  border-radius: 4px;
  padding: 12px 20px;
  margin: 16px 0;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.bgColor};
    opacity: 0.9;
  }
`;
