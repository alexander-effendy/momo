import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// import AlienIcon from '@/assets/AlienIcon';
import useMediaQuery from '@mui/material/useMediaQuery';

const PomodoroTimer = () => {

  const mobile = useMediaQuery('(max-width:430px)');
  const desktop = useMediaQuery('(min-width:1023px)');

  // usestates
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isPause, setIsPause] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    // check if active or not
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // deactivate stopwatch
            setIsActive(false);
            clearInterval(interval as NodeJS.Timeout);
          } else {
            // if minutes not 0 yet, decrease minute
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          }
        } else {
          // decrease seconds
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000)
    } else if (!isActive && (minutes !== 0 || seconds !== 0)) {
      clearInterval(interval as NodeJS.Timeout);
    }
    return () => clearInterval(interval as NodeJS.Timeout);
  }, [isActive, minutes, seconds, isPause]);

  const timeParser = (unit: Number) => {
    return String(unit).padStart(2, '0');
  }

  const handleStartorPause = () => {
    // if active then pause
    if (isActive) {
      setIsPause(true);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  const handleReset = () => {
    setIsActive(false);
    setIsPause(false);
    setSeconds(0);
    setMinutes(25);
  }

  const checkResume = () => {
    // if minutes or seconds not 0 but notActive and isPause is true then show Resume instead of Start
    if (!isActive && isPause) {
      return true;
    } else {
      return false;
    }
  }

  const totalTime = 25 * 60;

  const calculateProgress = () => {
    const currentTime = minutes * 60 + seconds;
    return ((totalTime - currentTime) / totalTime) * 100;
  };

  const radius = desktop ? '160' : '120';
  const cx = desktop ? '175' : '125';
  const cy = desktop ? '175' : '125';

  return (
    <div 
      className={`flex flex-col select-none ${mobile && 'mt-[-20px]'}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative bg-background">
        <svg className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
          <circle
            className="text-gray-400"
            strokeWidth="3"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={cx}
            cy={cy}
          />
          <circle
            className="text-white"
            strokeWidth="4.5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={cx}
            cy={cy}
            style={{
              strokeDasharray: 2 * Math.PI * Number(radius),
              strokeDashoffset: (2 * Math.PI * Number(radius)) - (calculateProgress() / 100) * (2 * Math.PI * Number(radius)),
              transition: 'stroke-dashoffset 1s linear',
              transform: 'rotate(-90deg)',
              transformOrigin: 'center'
            }}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy="0.3em"
            className="text-white text-[60px] lg:text-[80px]"
            fill="white"
          >
            {timeParser(minutes)} : {timeParser(seconds)}
          </text>
        </svg>
      </div>

      <div className={`transition-opacity duration-1000 ${isHover ? 'opacity-100 visible' : 'opacity-0'} flex w-full items-center justify-center mt-[20px] gap-[12px]`}>
        <Button className="bg-white rounded-[10px] hover:bg-gray-300" onClick={() => handleStartorPause()}>{checkResume() ? 'Resume' : isActive ? 'Pause' : 'Start'}</Button>
        <Button className={`${isActive || isPause ? '' : !isActive && !isPause ? 'hidden' : 'hidden'} bg-white rounded-[10px] hover:bg-gray-300`} onClick={() => handleReset()}>Reset</Button>
      </div>
      

    </div>
    
  )
}

export default PomodoroTimer;