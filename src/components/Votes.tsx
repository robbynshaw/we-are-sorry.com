import React from 'react';
import styled from '@emotion/styled';
import { Box } from 'rebass';

const SuperBox = styled(Box)`
  font-size: 10px;
  display: inline-block;
  vertical-align: top;
  margin: 0 5px;
`;

export interface VotesProps {
  count: number;
}

const Votes: React.SFC<VotesProps> = (props: VotesProps) => {
  const { count } = props;
  return <SuperBox>{`( ${count} votes )`}</SuperBox>;
};

export default Votes;
