import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { Box, Text } from 'rebass';
import CommentModel from '@src/models/CommentModel';
import ReactMarkdown from 'react-markdown';
import RatingsBar from './RatingsBar';
import ByLine from './ByLine';

const SpeechBubble = styled(Box)`
  position: relative;
  padding: 15px;
  margin: 1em 0 3em;
  border: 5px solid #5a8f00;
  color: #333;
  background: #fff;
  /* css3 */
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  :before {
    content: '';
    position: absolute;
    bottom: -20px; /* value = - border-top-width - border-bottom-width */
    left: 40px; /* controls horizontal position */
    border-width: 20px 20px 0;
    border-style: solid;
    border-color: #5a8f00 transparent;
    /* reduce the damage in FF3.0 */
    display: block;
    width: 0;
  }

  :after {
    content: '';
    position: absolute;
    bottom: -13px; /* value = - border-top-width - border-bottom-width */
    left: 47px; /* value = (:before left) + (:before border-left) - (:after border-left) */
    border-width: 13px 13px 0;
    border-style: solid;
    border-color: #fff transparent;
    /* reduce the damage in FF3.0 */
    display: block;
    width: 0;
  }
`;

export interface CommentProps extends CommentModel {
  number: number;
}

const Comment: React.SFC<CommentProps> = (props: CommentProps): ReactElement => {
  const { message, author, ratings } = props;
  const { fullName } = author;

  return (
    <SpeechBubble>
      <RatingsBar ratings={ratings} />
      <Text fontFamily="body" px={3} py={2}>
        <ReactMarkdown source={message} />
      </Text>
      <ByLine fullName={fullName} />
    </SpeechBubble>
  );
};

export default Comment;
