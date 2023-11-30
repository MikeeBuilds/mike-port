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
    <div className='flex items-center gap-x-2'>
      <div className='text-4-xl leading-none font-bold text-primary'>
        <CountUp end={endCountNum} delay={1} duration={4}/>
        {endCountText}
      </div>
      <div className=''>{badgeText}</div>
    </div>
  </div>;
};

export default Badge;
