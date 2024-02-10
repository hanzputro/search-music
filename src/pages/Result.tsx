import ListItem from "../components/ListItem";
import SearchResult from "../components/SearchResult";

const Result = () => {
  return (
    <div className="flex flex-col justify-between items-stretch px-[25px]">
      <div className="w-full max-w-[600px] mx-auto mb-[20px]">
        <SearchResult value="Jason Mraz" />
        <ListItem
          artist="Travie McCoy"
          album="Rough Water (feat. Jason Mraz)"
          albumImage=""
          genre="pop"
          price="1.9"
          url="/specificAlbum"
        />
        <ListItem
          artist="Travie McCoy"
          album="Rough Water (feat. Jason Mraz)"
          albumImage=""
          genre="pop"
          price="1.9"
          url="/specificAlbum"
        />
      </div>
      <button className="absolute bottom-[28px] left-0 right-0 mx-auto button-gray">
        Load More
      </button>
    </div>
  );
};

export default Result;
