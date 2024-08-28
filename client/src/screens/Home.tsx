import { useState, useRef, useLayoutEffect } from 'react';
import dragon from '@/assets/songs/coc-dragon-palace.mp3'

import Lottie from 'lottie-react';
import leaf from '@/assets/svg/leaf.json';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from '@/components/ui/button';

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

import LeafIcon from '@/assets/LeafIcon';
import SongIcon from '@/assets/SongIcon';

import ghibliForest from '@/assets/walpaper/ghibliForest.jpg';
import BridgeWater from '@/assets/walpaper/BridgeWater.jpg';
import DeerWater from '@/assets/walpaper/DeerWater.jpg';
import HouseForest from '@/assets/walpaper/HouseForest.jpg';
import Pagoda from '@/assets/walpaper/Pagoda.jpg';
import ghibliPlane from '@/assets/walpaper/ghibliPlane.jpg';

import totoro from '@/assets/walpaper/totoro.webp';
import Umbrella from '@/assets/walpaper/Umbrella.png';
import Anime from '@/assets/walpaper/Anime.jpg';

import PomodoroTimer from '@/components/PomodoroTimer';
import { useNavigate } from 'react-router-dom';

const imageClassName="border-[1px] border-white hover:cursor-pointer filter grayscale hover:grayscale-0 transition-duration duration-500";

const images = [
  { src: ghibliForest, alt: 'ghibliForest' },
  { src: BridgeWater, alt: 'BridgeWater' },
  { src: DeerWater, alt: 'DeerWater' },
  { src: HouseForest, alt: 'HouseForest' },
  { src: Pagoda, alt: 'Pagoda' },
  { src: ghibliPlane, alt: 'ghibliPlane' },
  { src: totoro, alt: 'ghibliPlane' },
  { src: Umbrella, alt: 'ghibliPlane' },
  { src: Anime, alt: 'ghibliPlane' },
];

const Home = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
  
  const [currentWalpaper, setCurrentWalpaper] = useState<string>(ghibliForest);

  const scrollImageRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (src: string) => {
    if (src === currentWalpaper) return;
    const scrollPosition = scrollImageRef.current?.scrollTop || 0;
    setCurrentWalpaper(src);
    
    console.log(currentWalpaper);

    setTimeout(() => {
      if (scrollImageRef.current) {
        scrollImageRef.current.scrollTop = scrollPosition;
      }
    }, 2000);
  };

  const dialogRef = useRef<HTMLDivElement>(null);

  const SettingDialog = () => {
    return(
      <div 
        className="z-[100] bg-background w-[300px] grid place-items-center" 
        style={{ height: 'calc(100vh - 100px)' }} 
        ref={dialogRef}
      >
        <section 
          ref={scrollImageRef}
          className={`z-[100] flex flex-col gap-[10px] w-full h-full overflow-y-auto hide-scroll ${!isSettingOpen && 'pointer-events-none'}`}>
          {images.map((image, index) => (
            <div key={index} className={imageClassName}>
              <img onClick={() => handleImageClick(image.src)} src={image.src} alt={image.alt} className="w-full h-auto" />
            </div>
          ))}
        </section>
      </div>
    )
  }

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
    };
    const scrollPosition = scrollImageRef.current?.scrollTop || 0;
    setTimeout(() => {
      if (scrollImageRef.current) {
        scrollImageRef.current.scrollTop = scrollPosition;
      }
    }, 0);
  }

  const handleSettingToggle = () => {
    
    setIsSettingOpen((isSettingOpen) => !isSettingOpen);
    console.log(isSettingOpen);
  }

  const handleButtonClick = () => {
    window.open('https://alexandereffendy.com', '_blank');
  };

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const LoadingPage = () => {
    return (
      <div 
        className={`${isLoading ? '' : 'hidden'} z-[100] h-screen w-screen grid place-items-center bg-[#061b21] text-2xl font-bold select-none`}>
        <section className="flex flex-col bg-yellow-200s">
          <div className="flex gap-[10px] items-center">
            <Lottie className="my-auto size-[70px]" animationData={leaf} loop={true} />
            <div className="text-white text-[50px] animate-colorFade jersey-10-regular">momo</div>
          </div>
        </section>     
      </div>
    )
  }

  return (
    <div className="bg-[#061b21]">
      <LoadingPage />
      {/* Background with ripple effect */}


      {/* Transparent overlay to allow clicks to pass through */}
      <div
        className={`${isLoading ? 'opacity-0 bg-[#061b21]' : 'opacity-95'} first-line:transition-opacity duration full-height w-screen h-screen bg-cover bg-center bg-no-repeat grid place-items-center overflow-y-hidden`}
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${currentWalpaper})`,        
        }}
      >
        <div
          id="ripple-bg"
          className="absolute w-full h-full"
          style={{ zIndex: 60 }}
        />
        <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration ease-in-out`}>
          <Button onClick={() => handleSettingToggle()} className="pomodoro-icon select-none rounded-[10px] hover:bg-[#234121] hover:text-white"
            style={{ zIndex: 71 }}
          >{isSettingOpen ? 'close' : 'Settings'}</Button>
          {isSettingOpen &&
            <div className="absolute top-[80px] left-[20px]">
              <SettingDialog />
            </div>
          }
      
          <Sheet>
            <SheetTrigger>
              <LeafIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <VisuallyHidden><SheetTitle className="jersey-10-regular">Momo</SheetTitle></VisuallyHidden>
                <SheetDescription>
                  {/* This web app is designed to help relax and focus. */}
                </SheetDescription>
              </SheetHeader>
              {/* account */}
              <section className="flex flex-col justify-between p-[30px] h-full text-white select-none">
                <section className="grid place-items-center">
                  <section className="flex flex-col justify-between h-full">
                    <Button className="hover:underline">Profile</Button>
                    <Button>
                      <span className="hover:underline" onClick={() => navigate('./about')}>
                        About <span className="jersey-10-regular text-[20px]">MOMO</span>
                      </span>
                    </Button>
                    <Button className="hover:underline">Songs</Button>
                  </section>
                </section>
                <Button onClick={() => handleButtonClick()}>alexandereffendy.com</Button>
              </section>
            
              {/* songs */}
              {/* website portfolio */}
            </SheetContent>
          </Sheet>
          <audio ref={audioRef} src={dragon} preload="auto" loop={true}/>
          <Drawer>
            <DrawerTrigger>
              <div onClick={() => setIsSettingOpen(false)}><SongIcon /></div>
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


