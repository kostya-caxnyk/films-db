import React from 'react';
import classnames from 'classnames';

import s from './RateCircle.module.scss';

interface RateCircleProps {
  size: 'big' | 'small';
  score: number;
}

const RateCircle: React.FC<RateCircleProps> = ({ score, size }) => {
  const rateNumber = Math.round(score * 10);
  const borderColor =
    rateNumber > 70 ? 'green' : rateNumber > 25 ? 'yellow' : rateNumber === 0 ? 'gray' : 'red';

  return (
    <span className={classnames(s.outerBorder, s[size])}>
      <span className={s.rateCircle} style={{ borderColor }}>
        {rateNumber}%
      </span>
    </span>
  );
};

export default RateCircle;
