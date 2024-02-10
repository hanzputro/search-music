import playCircle from "../assets/play-circle.svg";
import currency from "../assets/currency-dollar.svg";
import { Link } from "react-router-dom";

type listItemType = {
  artist: string;
  track: string;
  albumImage: string;
  genre: string;
  price: string;
  url: string;
};

const ListItem = ({
  artist,
  track,
  albumImage,
  genre,
  price,
  url,
}: listItemType) => {
  return (
    <div className="flex justify-between items-stretch space-x-[12px] px-[12px] py-[14px] rounded-[10px] shadow-listItem">
      <Link
        to={url}
        className="flex-none relative w-[100px] h-[100px] rounded-[12px]"
      >
        <img
          className="absolute w-[100px] h-[100px] z-10 inset-0 m-auto object-none hover:opacity-50"
          src={playCircle}
          alt="video icon"
          width={32}
        />
        <img
          className="w-[100px] h-[100px] bg-[#000] rounded-[12px]"
          src={albumImage}
          alt="album image"
        />
      </Link>

      <div className="flex flex-col justify-center grow w-full space-y-[27px]">
        <div className="mb-auto">
          <h2 className="text-[10px] text-gray tracking-[0.36px]">{artist}</h2>
          <h3 className="text-sm font-bold text-gray tracking-[0.5px]">
            {track}
          </h3>
        </div>
        <div className="flex justify-between">
          <span className="tag">{genre}</span>
          <div className="flex items-center space-x-[6px]">
            <img src={currency} alt="currency icon" width={16} />
            <p className="font-roboto font-bold text-xs tracking-[0.43px] text-orange">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
