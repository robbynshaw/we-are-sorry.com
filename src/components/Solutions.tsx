/* eslint-disable jsx-a11y/accessible-emoji */
import React, { ReactElement } from 'react';
import { Text } from 'rebass';
import styled from '@emotion/styled';

const Span = styled.span`
  display: inline-block;
  padding: 0 5px;
`;

const Solutions: React.SFC = (): ReactElement => {
  return (
    <Text m={4} fontSize={3} fontFamily="body">
      Nothing yet.
      <Span role="img" aria-label="Hmmm">
        😕
      </Span>
      Got any ideas?
      <Span role="img" aria-label="Lightning">
        ⚡
      </Span>
    </Text>
  );
};

export default Solutions;
