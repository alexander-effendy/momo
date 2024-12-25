import { createContext, useState, Dispatch, SetStateAction, ReactNode, useRef } from "react";

import Paris from '../src/assets/songs/good-morning-paris.mp3';
import Love from '@/assets/songs/in-love.mp3';
import City from '@/assets/songs/my-city.mp3';
import Caffeine from '@/assets/songs/caffeine.mp3';
import Habit from '@/assets/songs/habit.mp3';
import Chill from '@/assets/songs/chill.mp3';
import Rainy from '@/assets/songs/rainy.mp3';
import Sunrise from '@/assets/songs/sunrise.mp3';
import Heart from '@/assets/songs/heart.mp3';

interface SearchContextType {
  currentSongContext: string | undefined;
  setCurrentSongContext: Dispatch<SetStateAction<string | undefined>>;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  togglePlayPause: (song: string) => void;
}

const placeholderFunction = () => {
  // placeholder function
};

const defaultContextValue: SearchContextType = {
  currentSongContext: undefined,
  setCurrentSongContext: placeholderFunction,
  audioRef: { current: null },
  isPlaying: false,
  togglePlayPause: placeholderFunction,
};

export const SearchContext = createContext<SearchContextType>(defaultContextValue);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [currentSongContext, setCurrentSongContext] = useState<string | undefined>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const songConverter = (song: string) => {
    switch (song) {
      case "Paris": return Paris;
      case "Love": return Love;
      case "City": return City;
      case "Caffeine": return Caffeine;
      case "Habit": return Habit;
      case "Chill": return Chill;
      case "Rainy": return Rainy;
      case "Sunrise": return Sunrise;
      case "Heart": return Heart;

      default: return "";
    }
  };
  
  const togglePlayPause = (song: string) => {
    if (audioRef.current) {
      // Switch to a new song
      if (currentSongContext !== song) {
        setCurrentSongContext(song);
        audioRef.current.src = songConverter(song);
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        // Toggle play/pause for the same song
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    }
  };

  return (
    <SearchContext.Provider
      value={{
        currentSongContext,
        setCurrentSongContext,
        audioRef,
        isPlaying,
        togglePlayPause,
      }}
    >
      {children}
      <audio ref={audioRef} preload="auto" loop={true} />
    </SearchContext.Provider>
  );
};
