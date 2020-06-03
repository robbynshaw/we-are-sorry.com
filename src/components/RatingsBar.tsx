import React from 'react';
import { Box } from 'rebass';
import RatingModel from '@src/models/RatingModel';
import Rating from './Rating';

export interface RatingsBarProps {
  ratings: RatingModel[];
}

const RatingsBar: React.SFC<RatingsBarProps> = (props: RatingsBarProps) => {
  const { ratings } = props;
  return (
    <Box>
      {ratings.map(r => (
        <Rating name={r.name} stars={r.stars} votes={r.votes} calculated={r.calculated} />
      ))}
    </Box>
  );
};

export default RatingsBar;
