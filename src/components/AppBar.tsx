import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box, Link, Heading, Text } from 'rebass';

const DotCom = styled(Text)`
  text-transform: lowercase;
  display: inline-block;
`;

const AppBar: React.SFC = () => {
  return (
    <Flex px={3} py={2} color="white" bg="black" alignItems="center">
      <Heading margin={1}>
        We Are Sorry
        <DotCom fontSize={3} mx={1}>
          .com
        </DotCom>
      </Heading>
      <Box mx="auto" />
      <Link variant="nav" href="#!">
        Sign In
      </Link>
    </Flex>
  );
};

export default AppBar;
