import React, { ReactElement } from 'react';
import { Box, Heading, Text } from 'rebass';
import ReactMarkdown from 'react-markdown';
import IssueComponentModel from '@src/models/IssueComponentModel';
import styled from '@emotion/styled';
import RatingsBar from './RatingsBar';

const Number = styled(Text)`
  margin-left: -25px;
`;

export interface IssueComponentProps extends IssueComponentModel {
  number: number;
}

const IssueComponent: React.SFC<IssueComponentProps> = (
  props: IssueComponentProps,
): ReactElement => {
  const { number, name, description, ratings } = props;

  return (
    <Box p={5} my={3} display="inline-block" variant="lightBorder">
      <Heading fontSize={5}>
        <Number
          display="inline-block"
          fontFamily="heading"
          fontSize={7}
          fontWeight="bold"
          mx={3}
          color="#f2f5f6"
        >
          {number}
        </Number>
        {name}
      </Heading>
      <RatingsBar ratings={ratings} />
      <Text fontFamily="body" px={3} py={2}>
        <ReactMarkdown source={description} />
      </Text>
      <Box maxWidth="300px" marginTop={3} px={3} py={2} variant="lightBorder">
        <Text fontFamily="body" textAlign="center">
          Written By George Harrison Ford
        </Text>
      </Box>
      <Box variant="lightBorder" m={3} p={3}>
        <Text fontFamily="body">
          Snippets of top 3 discussion notes (research, debate, etc) [TODO]
        </Text>
        <Text fontFamily="body">Click here to view discussion [TODO]</Text>
      </Box>
      <Box variant="lightBorder" m={3} p={3}>
        <Text fontFamily="body">Click Here to view proposed solutions [TODO]</Text>
      </Box>
    </Box>
  );
};

export default IssueComponent;
