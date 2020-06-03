import React, { ReactElement } from 'react';
import { Box, Text } from 'rebass';
import numberToArray from '@src/lib/numberToArray';
import RatingModel from '@src/models/RatingModel';
import Votes from './Votes';

const Rating: React.SFC<RatingModel> = (props: RatingModel): ReactElement => {
  const { name, stars, votes, calculated } = props;
  const variant = calculated ? 'inverted' : 'lightBorder';
  const starsAr = numberToArray(stars);
  return (
    <Box m={3} p={3} variant={variant} display="inline-block">
      <Text fontFamily="body">
        {name}
        <Box display="inline" mx={1}>
          :
        </Box>
        {starsAr.map(i => (
          <span role="img" aria-label="Star" key={i}>
            ⭐
          </span>
        ))}
        <Votes count={votes} />
      </Text>
    </Box>
  );
};

export default Rating;
