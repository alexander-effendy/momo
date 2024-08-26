import { useState, useRef, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import dragon from '@/assets/songs/coc-dragon-palace.mp3'
import Lottie from 'lottie-react';
import leaf from '@/assets/svg/leaf.json';
import axios from 'axios';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// import auth functions

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from '@/components/ui/button';

import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://ec2-3-25-94-38.ap-southeast-2.compute.amazonaws.com:3000',
});

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
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
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

  const { login, register, logout, isAuthenticated, user, getToken } = useKindeAuth();

  // helpers
  const handleSignUp = async (getToken: any, user:any) => {
    const userInfo = {
      id: user.id,
      email: user.email,
      given_name: user.given_name,
      family_name: user.family_name
    };
    try {
      const token = await getToken();
      await api.post('/api/auth', userInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log('User authenticated and will be inserted into database if new. Otherwise no.', response.data);
    } catch (error) {
      console.error('Error during signing up:', error);
    }
  }

  const handleRegister = async () => {
    register();
    if (user) await handleSignUp(getToken, user);
  }

  const handleLogin = () => login();
  const handleLogout = () => logout();

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

  // const handleButtonClick = () => {
  //   window.open('https://alexandereffendy.com', '_blank');
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const LoadingPage = () => {
    // const { isAuthenticated, user } = useKindeAuth();
    return (
      <div className={`${isLoading ? '' : 'hidden'} z-[100] h-screen w-screen grid place-items-center bg-[#061b21] text-2xl font-bold select-none`}>
        <section className="flex flex-col bg-yellow-200s">
          <div className="flex gap-[10px] items-center">
            <Lottie className="my-auto size-[70px]" animationData={leaf} loop={true} />
            <div className="text-white text-[50px] animate-colorFade jersey-10-regular">momo</div>
          </div>
          {/* <div className="w-full flex justify-end ml-[-5px]">
            {(isAuthenticated && user) &&
              <div className="text-[20px] text-white">Hello {user?.given_name?.split(' ')[0]}!</div>
            }
          </div> */}
        </section>     
      </div>
    )
  }

  useEffect(() => {
    const registerAndSignUp = async () => {
      if (isAuthenticated && user && getToken) {
        await handleSignUp(getToken, user);
      }
    };
    registerAndSignUp();
  }, [isAuthenticated, user, getToken]);

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
            <DialogTrigger asChild>
              <Button className="pomodoro-icon select-none rounded-[10px] hover:bg-[#234121] hover:text-white">Progress</Button>
            </DialogTrigger>
            <DialogContent className="grid place-items-center">
              <DialogHeader>
                <DialogTitle>Pomodoro Progress</DialogTitle>
                <DialogDescription>
                  {(isAuthenticated && user) ?
                    <>
                      Track your progress!
                    </> :
                    <>
                      <div className="mb-[20px]">To track your pomodoro progress, you need to create an account.</div>
                      <section className="flex justify-end gap-[10px]">
                        <Button className="select-none bg-green-700 text-white rounded-[10px] hover:bg-white hover:border-[1px] border-black hover:text-black dialog-button" onClick={() => handleRegister()}>Register</Button>
                        <Button className="select-none bg-blue-700 text-white rounded-[10px] hover:bg-white hover:border-[1px] border-black hover:text-black dialog-button" onClick={() => handleLogin()}>Log In</Button>
                      </section>
                    </>
                  }
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
                <VisuallyHidden><SheetTitle className="jersey-10-regular">Momo</SheetTitle></VisuallyHidden>
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
                {/* <Button className="hover:underline" onClick={() => handleButtonClick()}>alexandereffendy.com</Button> */}
                {/* <span>Hi {user?.given_name} hi {user?.email}</span> */}
                <Button onClick={() => handleLogout()}>log out</Button>
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


