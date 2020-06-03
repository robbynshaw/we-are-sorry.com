import React, { ReactElement } from 'react';
import { Box, Text } from 'rebass';
import RatingModel from '@src/models/RatingModel';
import Votes from './Votes';
import Stars from './Stars';

const Rating: React.SFC<RatingModel> = (props: RatingModel): ReactElement => {
  const { name, stars, votes, calculated } = props;
  const variant = calculated ? 'inverted' : 'lightBorder';
  return (
    <Box m={3} p={3} variant={variant} display="inline-block">
      <Text fontFamily="body">
        {name}
        <Box display="inline" mx={1}>
          :
        </Box>
        <Stars count={stars} />
        <Votes count={votes} />
      </Text>
    </Box>
  );
};

export default Rating;
