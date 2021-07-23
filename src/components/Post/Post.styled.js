import styled from 'styled-components';

export const PostWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 4px;
`;

const avatarSize = '64px';
export const Avatar = styled.img`
  width: ${avatarSize};
  height: ${avatarSize};
`;
