import React, { ReactElement } from 'react';
import numberToArray from '@src/lib/numberToArray';

export interface StarsProps {
  count: number;
}

const Stars: React.SFC<StarsProps> = (props: StarsProps): ReactElement => {
  const { count } = props;
  const starsAr = numberToArray(count);
  return (
    <span>
      {starsAr.map(i => (
        <span role="img" aria-label="Star" key={i}>
          ⭐
        </span>
      ))}
    </span>
  );
};

export default Stars;
