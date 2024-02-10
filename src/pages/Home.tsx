import { useState } from "react";
import ngMusic from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-[#712bda] to-[#a45deb]">
      <div className="flex justify-center items-center h-[80vh]">
        <img src={ngMusic} width={72.2} />
      </div>
      <div className="w-full max-w-[280px] h-[20vh] flex flex-col justify-center space-y-[15px]">
        <input
          className="input"
          placeholder="Artist / Album / Title"
          onChange={(input: any) => setSearch(input.target.value)}
        />
        <Link
          to={{
            pathname: "/result",
            search: search && `?sort=${search}`,
          }}
          state={{ search: search }}
          className="button"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Home;
