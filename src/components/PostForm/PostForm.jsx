import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  Wrapper,
  Row,
  Textarea,
  CounterWrapper,
  CounterLabel,
  Spacer,
  Button,
} from './PostForm.styled';

const PostForm = ({ max, author, onPost }) => {
  const [content, setContent] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(content.length);
  }, [content]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handlePost = (ev) => {
    ev.preventDefault();
    onPost({
      author,
      content,
      id: nanoid(),
      createdAt: new Date().toISOString(),
      comments: 0,
      likes: 0,
    });
    setContent('');
  };

  return (
    <Wrapper onSubmit={handlePost}>
      <Row>
        <Textarea value={content} onChange={handleChange} placeholder="Write something..." />
      </Row>
      <Row>
        <CounterWrapper>
          <CounterLabel count={count} max={max}>
            {count}
          </CounterLabel>
          <CounterLabel>/</CounterLabel>
          <CounterLabel>{max}</CounterLabel>
        </CounterWrapper>
        <Spacer />
        <Button disabled={count >= max || count < 1}>Create</Button>
      </Row>
    </Wrapper>
  );
};

PostForm.defaultProps = {
  max: 120,
};

PostForm.propTypes = {
  max: PropTypes.number,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onPost: PropTypes.func.isRequired,
};

export default PostForm;
