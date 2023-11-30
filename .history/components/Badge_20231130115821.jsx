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
    <div className='text-3xl text-primary'>{icon}</div>
    <div>
      <div>
        <CountUp end={endCountNum} delay={1} duration={4}/>
      </div>
    </div>
  </div>;
};

export default Badge;
