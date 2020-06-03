import React from 'react';
import { Box, Text } from 'rebass';
import AuthorModel from '@src/models/AuthorModel';

const ByLine: React.SFC<AuthorModel> = (props: AuthorModel) => {
  const { fullName } = props;
  const msg = `Written by ${fullName}`;
  return (
    <Box maxWidth="300px" marginTop={3} px={3} py={2} variant="lightBorder">
      <Text fontFamily="body" textAlign="center">
        {msg}
      </Text>
    </Box>
  );
};

export default ByLine;
