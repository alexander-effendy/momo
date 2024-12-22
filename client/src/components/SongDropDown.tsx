import { useContext } from "react";

import ParisCover from "@/assets/walpaper/SongWalpaper/ParisCover.png";
import JerryCover from "@/assets/walpaper/SongWalpaper/Jerry.png";

import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

import { SearchContext } from "@/useContext";

const SongDropDown = () => {
  const { currentSongContext, isPlaying, togglePlayPause } = useContext(SearchContext);

  return (
    <div className="soft-scrollbar flex h-[160px] w-full overflow-x-auto overflow-y-hidden bg-[#071b20] gap-2 pt-[5px]">
      <SongComponent
        title="Good Morning in Paris"
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
    </div>
  );
};

interface SongComponentProps {
  title: string;
  isPlaying: boolean;
  togglePlayPause: () => void;
  imgSrc: any;
}

const SongComponent: React.FC<SongComponentProps> = ({ title, isPlaying, togglePlayPause, imgSrc }) => {
  return (
    <div
      className="relative flex flex-col h-[50px] items-center hover:cursor-pointer hover:opacity-100 opacity-90"
    >
      <div className="size-[200px] object-cover flex justify-center items-center">
        <img className="w-[100px] h-[100px]" src={imgSrc} alt={title} />

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
      <span className="text-white text-wrap mt-3">{title}</span>
    </div>
  );
};

export default SongDropDown;
