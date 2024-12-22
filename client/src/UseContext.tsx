import { createContext, useState, Dispatch, SetStateAction, ReactNode, useRef } from "react";

import Paris from '../src/assets/songs/good-morning-paris.mp3';
import Love from '@/assets/songs/in-love.mp3';

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
