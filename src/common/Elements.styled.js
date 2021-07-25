import styled from 'styled-components';
import logoPath from '../img/logo.png';

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
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
  border: none;
  color: black;
  padding: 12px 20px;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;
  &:hover {
    background-color: rgb(67, 154, 254);
    color: white;
  }
`;

export const Logo = styled.img`
  filter: invert(100%);
  pointer-events: none;
  alt: 'logo';
`;

Logo.defaultProps = {
  src: logoPath,
};
