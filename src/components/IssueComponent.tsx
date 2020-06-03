import React, { ReactElement } from 'react';
import { Box, Heading, Text } from 'rebass';
import ReactMarkdown from 'react-markdown';
import IssueComponentModel from '@src/models/IssueComponentModel';
import styled from '@emotion/styled';
import RatingsBar from './RatingsBar';
import Discussion from './Discussion';
import ByLine from './ByLine';
import Stars from './Stars';
import Solutions from './Solutions';

const InvertedSubtitle = styled(Heading)`
  background-color: black;
  color: white;
  margin-left: -100px;
  margin-right: -100px;
`;

const Number = styled(Text)`
  margin-left: -25px;
`;

export interface IssueComponentProps extends IssueComponentModel {
  number: number;
}

const IssueComponent: React.SFC<IssueComponentProps> = (
  props: IssueComponentProps,
): ReactElement => {
  const { number, id, name, description, ratings, author } = props;
  const { fullName } = author;

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
      <Text fontFamily="body" fontSize={3} px={3} py={2}>
        <ReactMarkdown source={description} />
      </Text>
      <ByLine fullName={fullName} />
      <InvertedSubtitle py={4} px={5} marginTop={2}>
        The discussion points are
      </InvertedSubtitle>
      <Discussion itemType="component" itemId={id} />
      <InvertedSubtitle py={4} px={5} marginTop={2}>
        <Stars count={3} />
        <Text display="inline-block" mx={2}>
          The proposed solutions are
        </Text>
        <Stars count={3} />
      </InvertedSubtitle>
      <Solutions />
    </Box>
  );
};

export default IssueComponent;
