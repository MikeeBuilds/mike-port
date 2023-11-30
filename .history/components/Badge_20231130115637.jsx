"use client"
import CountUp from 'react-countup';

const Badge = ({
  containerstyles,
  icon,
  endCountNum,
  endCountText,
  badgeText
}) => {
  return <div className={`badge ${containerstyles}`}>
    <div>{icon}</div>
  </div>;
};

export default Badge;
