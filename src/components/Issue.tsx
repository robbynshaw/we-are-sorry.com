import React, { ReactElement } from 'react';
import { Box, Heading, Text } from 'rebass';
import IssueModel from '@src/models/IssueModel';

const Issue: React.SFC<IssueModel> = (props: IssueModel): ReactElement => {
  const { name, description } = props;
  return (
    <Box backgroundColor="white" m={3} p={5} variant="lightBorder">
      <Heading>The Issue Is</Heading>
      <Heading fontSize={7}>{name}</Heading>
      <Text fontFamily="body" fontSize={4}>
        {description}
      </Text>
    </Box>
  );
};

export default Issue;
