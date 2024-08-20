import { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';
import dragon from '@/assets/songs/coc-dragon-palace.mp3'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
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
// import BlueForest from '@/assets/BlueForest.png';
// import SatelliteDish from '@/assets/SatelliteDish.png';
// import Dog from '@/assets/Dog.png';
// import Koala from '@/assets/Koala.png';
// import CalmPyramid from '@/assets/CalmPyramid.jpeg';
// import WatermelonCat from '@/assets/WatermelonCat.png';
// import ghibliPlane from '@/assets/ghibliPlane.jpg';
import ghibliForest from '@/assets/ghibliForest.jpg';

import PomodoroTimer from '@/components/PomodoroTimer';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  return (
    <div 
      className="full-height w-screen h-screen bg-cover bg-center bg-no-repeat grid place-items-center overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${ghibliForest})`,        
      }}
    >
      <Dialog>
        <DialogTrigger>
          <Button className="absolute left-5 top-5 border-[2px] border-white hover:text-black hover:bg-white text-white select-none rounded-[10px]">Pomodoro</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>We are so sorry!</DialogTitle>
            <DialogDescription>
              This feature is not available yet as we are developing the web app. Stay tune!
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
            <SheetTitle>nehimomo</SheetTitle>
            <SheetDescription>
              This web app is designed to help relax and focus.
            </SheetDescription>
          </SheetHeader>
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
  )
}

export default Home;