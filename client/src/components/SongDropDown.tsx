import { useContext } from "react";

import ParisCover from "@/assets/walpaper/SongWalpaper/ParisCover.png";
import JerryCover from "@/assets/walpaper/SongWalpaper/Jerry.png";
import CityCover from "@/assets/walpaper/SongWalpaper/CityCover.png";
import CaffeineCover from "@/assets/walpaper/SongWalpaper/CaffeineCover.png";
import HabitCover from "@/assets/walpaper/SongWalpaper/HabitCover.png";
import RainyCover from "@/assets/walpaper/SongWalpaper/Rainy.png";
import SunriseCover from "@/assets/walpaper/SongWalpaper/Sunrise.png";
import ChillCover from "@/assets/walpaper/SongWalpaper/ChillCover.png";
import HeartCover from "@/assets/walpaper/SongWalpaper/HeartCover.png";

import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

import { SearchContext } from "@/UseContext";

const SongDropDown = () => {
  const { currentSongContext, isPlaying, togglePlayPause } =
    useContext(SearchContext);

  return (
    <div className="soft-scrollbar flex h-[155px] w-full overflow-x-auto overflow-y-hidden bg-[#071b20] gap-2 pt-[5px]">
      <SongComponent
        title="Paris"
        isPlaying={isPlaying && currentSongContext === "Paris"}
        togglePlayPause={() => togglePlayPause("Paris")}
        imgSrc={ParisCover}
      />
      <SongComponent
        title="I am in love"
        isPlaying={isPlaying && currentSongContext === "Love"}
        togglePlayPause={() => togglePlayPause("Love")}
        imgSrc={JerryCover}
      />
      <SongComponent
        title="My City"
        isPlaying={isPlaying && currentSongContext === "City"}
        togglePlayPause={() => togglePlayPause("City")}
        imgSrc={CityCover}
      />
      <SongComponent
        title="Caffeine"
        isPlaying={isPlaying && currentSongContext === "Caffeine"}
        togglePlayPause={() => togglePlayPause("Caffeine")}
        imgSrc={CaffeineCover}
      />
      <SongComponent
        title="Habit"
        isPlaying={isPlaying && currentSongContext === "Habit"}
        togglePlayPause={() => togglePlayPause("Habit")}
        imgSrc={HabitCover}
      />
      <SongComponent
        title="Chill"
        isPlaying={isPlaying && currentSongContext === "Chill"}
        togglePlayPause={() => togglePlayPause("Chill")}
        imgSrc={ChillCover}
      />
      <SongComponent
        title="Rainy"
        isPlaying={isPlaying && currentSongContext === "Rainy"}
        togglePlayPause={() => togglePlayPause("Rainy")}
        imgSrc={RainyCover}
      />
      <SongComponent
        title="Sunrise"
        isPlaying={isPlaying && currentSongContext === "Sunrise"}
        togglePlayPause={() => togglePlayPause("Sunrise")}
        imgSrc={SunriseCover}
      />
      <SongComponent
        title="Heart"
        isPlaying={isPlaying && currentSongContext === "Heart"}
        togglePlayPause={() => togglePlayPause("Heart")}
        imgSrc={HeartCover}
      />
    </div>
  );
};

interface SongComponentProps {
  title: string;
  isPlaying: boolean;
  togglePlayPause: () => void;
  imgSrc: any;
}

const SongComponent: React.FC<SongComponentProps> = ({
  title,
  isPlaying,
  togglePlayPause,
  imgSrc,
}) => {
  return (
    <div className={`relative flex flex-col h-[50px] items-center hover:cursor-pointer hover:opacity-100 ${isPlaying ? 'opacity-100' : 'opacity-60'} transition-opacity duration-500`}>
      <div className="size-[200px] object-cover flex justify-center items-center">
        <img className="rounded-[5px] w-[100px] h-[100px]" src={imgSrc} alt={title} />

        {!isPlaying && (
          <div
            onClick={togglePlayPause}
            className="absolute left-[50px] w-[100px] h-[100px] inset-0 top-0 flex items-center justify-center opacity-0 hover:opacity-100"
          >
            <div className="rounded-full bg-black opacity-50 p-2">
              <CiPlay1 size={20} color="white" />
            </div>
          </div>
        )}

        {isPlaying && (
          <div
            onClick={togglePlayPause}
            className="absolute left-[50px] w-[100px] h-[100px] inset-0 top-0 flex items-center justify-center duration-200"
          >
            <div className="rounded-full bg-black opacity-50 p-2">
              <CiPause1 size={20} color="white" />
            </div>
          </div>
        )}
      </div>
      <span className="caption text-white text-wrap mt-3">{title}</span>
    </div>
  );
};

export default SongDropDown;
