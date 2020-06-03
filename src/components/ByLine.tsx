import React from 'react';
import { Box, Text, Flex } from 'rebass';
import AuthorModel from '@src/models/AuthorModel';

const ByLine: React.SFC<AuthorModel> = (props: AuthorModel) => {
  const { fullName } = props;
  const msg = `-- ${fullName}`;
  return (
    <Flex px={3} py={2} color="grey">
      <Box mx="auto" />
      <Text fontSize={1} fontFamily="body" textAlign="center">
        {msg}
      </Text>
    </Flex>
  );
};

export default ByLine;
