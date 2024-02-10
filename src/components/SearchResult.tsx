type resultType = {
  value: string;
};

const SearchResult = ({ value }: resultType) => {
  return (
    <div className="pt-[37px] flex justify-center items-end">
      <p className="flex font-roboto text-sm text-gray tracking-[0.5px] mr-[10px]">
        Search result for:
      </p>
      <h5 className="contents text-lg font-bold text-purple tracking-[0.64px]">
        {value}
      </h5>
    </div>
  );
};

export default SearchResult;
