import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = (song, i) => {
  const activeSong = "Test";
  return (
    // <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    //   <div className="relative w-full h-56 group">
    //     <div
    //       className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
    //         activeSong?.title === song.title
    //           ? "flex bg-black bg-opacity-70"
    //           : "hidden"
    //       }`}
    //     >
    //       <PlayPause/>
    //     </div>
    //     <img alt="photo_url" src={song.images?.coverart}/>
    //   </div>
    //   <div className="mt-4 flex flex-col">
    //     <p>
    //       <Link>
    //         {song.title}
    //       </Link>
    //     </p>
    //     <p>
    //       <Link>
    //         {song.subtitle}
    //       </Link>
    //     </p>
    //   </div>
    // </div>
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
        {/* <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        /> */}
      </div>
      <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />
    </div>

    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link>
          {song.title}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link>
          {song.subtitle}
        </Link>
      </p>
    </div>
  </div>
  );
};

export default SongCard;
