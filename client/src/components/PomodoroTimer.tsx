import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// import AlienIcon from '@/assets/AlienIcon';

const PomodoroTimer = () => {

  // usestates
  // const [minutes, setMinutes] = useState<Number>(25);
  // const [seconds, setSeconds] = useState<Number>(0);
  // const [isActive, setIsActive] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {

  }, [])

  return (
    <div 
      className="flex flex-col select-none"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="bg-background border-[2px] border-white rounded-[2000px] size-[250px] lg:size-[350px] select-none grid place-items-center text-white text-[80px]">
        00 : 00
      </div>
      <div className={`transition-opacity duration-1000 ${isHover ? 'opacity-100 visible' : 'opacity-0'} flex w-full items-center justify-center mt-[20px] gap-[12px]`}>
        <Button className="bg-white rounded-[10px]">Start</Button>
        <Button className="bg-white rounded-[10px]">Pause</Button>
        <Button className="bg-white rounded-[10px]">Stop</Button>
      </div>
      

    </div>
    
  )
}

export default PomodoroTimer;