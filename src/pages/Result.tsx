import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import ListItem from "../components/ListItem";
import SearchResult from "../components/SearchResult";

type getDataType = {
  search: string;
  limit: number;
};

type itemType = {
  resultCount: number;
  results: [];
};

const Result = () => {
  const [items, setItems] = useState<itemType>();
  const [itemLimit, setItemLimit] = useState<number>(4);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const search = location.state?.search?.replace(/\s/g, "+") || "random";

  const getItem = ({ search, limit }: getDataType) => {
    axios
      .get(`https://itunes.apple.com/search?term=${search}&limit=${limit}`, {
        withCredentials: false,
      })
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItem({ search: search, limit: itemLimit || 4 });
  }, [search, itemLimit]);

  const listVariants = {
    initial: { y: 30, opacity: 0 },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const handleGetItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setItemLimit(itemLimit + 4);
    }, 1000);
  };

  const LoadMore = () => {
    return (
      <motion.button
        key={items?.resultCount}
        className="loadmore bottom-[28px] left-0 right-0 mx-auto button-gray mb-[20px]"
        viewport={{ once: true, margin: "0px" }}
        onViewportEnter={handleGetItems}
        onClick={handleGetItems}
      >
        {isLoading ? "Loading..." : "Load more"}
      </motion.button>
    );
  };

  return (
    <div className="flex flex-col justify-between items-stretch px-[25px]">
      <div className="w-full max-w-[600px] mx-auto mb-[20px]">
        {location.state?.search && (
          <SearchResult value={location.state?.search} />
        )}

        <div className="pt-[37px]">
          {items?.results &&
            items?.results.map((item: any, idx: number) => {
              return (
                <motion.div
                  key={idx}
                  variants={listVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={idx}
                >
                  <ListItem
                    artist={item.artistName}
                    track={item.trackName}
                    albumImage={item.artworkUrl100}
                    genre={item.primaryGenreName}
                    price={item.trackPrice}
                    url={item.trackViewUrl}
                  />
                </motion.div>
              );
            })}
        </div>
      </div>

      <div className="w-full max-w-[600px] mx-auto mb-[20px] flex justify-center">
        {items?.results?.length ? <LoadMore /> : "Search Not Found!"}
      </div>
    </div>
  );
};

export default Result;
