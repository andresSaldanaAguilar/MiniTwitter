import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 2rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  font-family: sans-serif;
  font-size: 1.4rem;
  padding: 1rem;
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const computeColor = ({ count, max }) => {
  if (!count && !max) {
    return css`
      color: black;
    `;
  }
  if (count >= max) {
    return css`
      color: red;
    `;
  }
  if (max - 15 < count) {
    return css`
      color: darkorange;
    `;
  }

  return css`
    color: darkgreen;
  `;
};

export const CounterLabel = styled.span`
  display: block;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.2rem;

  ${({ count, max }) => computeColor({ count, max })}
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  display: block;
  font-family: sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 0.25rem;
  background: lime;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s;
  cursor: pointer;

  &[disabled] {
    background: lightgrey;
  }
`;
