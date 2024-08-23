import { useState, useRef, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import dragon from '@/assets/songs/coc-dragon-palace.mp3'
import Lottie from 'lottie-react';
import leaf from '@/assets/svg/leaf.json';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  // DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  // DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import LeafIcon from '@/assets/LeafIcon';
import SongIcon from '@/assets/SongIcon';
import ghibliForest from '@/assets/ghibliForest.jpg';

import PomodoroTimer from '@/components/PomodoroTimer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navigate = useNavigate();

  const tooglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (audioRef.current) {
      if (!prevValue) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }

  const handleButtonClick = () => {
    window.open('https://alexandereffendy.com', '_blank');
  };

  // loading emoji when hone page first loads
  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoading(false);
  //   };
  //   window.addEventListener('load', handleLoad);
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   }
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const LoadingPage = () => {
    return (
      <div className={`${isLoading ? '' : 'hidden'} z-[100] h-screen w-screen grid place-items-center bg-[#061b21] text-2xl font-bold select-none`}>
        <div className="flex gap-[10px] items-center">
          <Lottie className="my-auto size-[70px]" animationData={leaf} loop={true} />
          <div className="text-white text-[50px] animate-colorFade jersey-10-regular">momo</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#061b21]">
      <LoadingPage />
      <div 
        className={`${isLoading ? 'opacity-0 bg-[#061b21]' : 'opacity-100'} transition-opacity duration ease-in-out full-height w-screen h-screen bg-cover bg-center bg-no-repeat grid place-items-center overflow-y-hidden`}
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${ghibliForest})`,        
        }}
      >
      
        <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration ease-in-out`}>
          <Dialog>
            <DialogTrigger>
              <Button className="pomodoro-icon select-none rounded-[10px] hover:bg-[#234121] hover:text-white">Progress</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Stay tuned!</DialogTitle>
                <DialogDescription>
                  This feature is not available yet!
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
      
          <Sheet>
            <SheetTrigger>
              <LeafIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                {/* <SheetTitle>nehimomo</SheetTitle> */}
                <SheetDescription>
                  {/* This web app is designed to help relax and focus. */}
                </SheetDescription>
              </SheetHeader>
              {/* account */}
              <section className="flex flex-col justify-between p-[30px] h-full text-white select-none">
                <section className="grid place-items-center">
                  <Button className="hover:underline">Profile</Button>
                  <Button>
                    <span className="hover:underline" onClick={() => navigate('./about')}>
                      About <span className="jersey-10-regular text-[20px]">MOMO</span>
                    </span>
                  </Button>
                  <Button className="hover:underline">Songs</Button>
                </section>
                <Button className="hover:underline" onClick={() => handleButtonClick()}>alexandereffendy.com</Button>
              </section>
              {/* songs */}
              {/* website portfolio */}
            </SheetContent>
          </Sheet>
          <audio ref={audioRef} src={dragon} preload="auto" loop={true}/>
          <Drawer>
            <DrawerTrigger>
              <SongIcon />
            </DrawerTrigger>
            <DrawerContent className="grid place-items-center">
            <div className="z-[20] fixed bottom-5 right-5 hover:cursor-pointer">
            <div className="my-auto h-[50px] w-[50px] bg-black" onClick={tooglePlayPause}/>
          </div>
            <DrawerHeader>
            </DrawerHeader>
            <DrawerFooter>
            
            </DrawerFooter>
            </DrawerContent>
          </Drawer>
      
          <div className="grid place-items-center w-screen h-screen">
            <PomodoroTimer />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home;