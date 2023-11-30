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
    <div></div>
  </div>;
};

export default Badge;
