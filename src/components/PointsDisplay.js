import React from 'react';

const PointsDisplay = (props) => {
  const { spent } = props;

  return (
    <div id="points">
      <div className="spent">{spent}/6</div>
      <div className="label">Points Spent</div>
    </div>
  );
};

export default PointsDisplay;
