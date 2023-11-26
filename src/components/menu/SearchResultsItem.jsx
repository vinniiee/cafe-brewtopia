import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SearchResultsItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { name, served, description } = item;
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  function handler() {
    setSearchParams({ search: name });
  }

  return (
    <div
      className="w-full  flex text-white justify-between cursor-pointer hover:bg-coffee/50
      items-center  border-0 border-b-2 border-spacing-x-2 bor border-[rgba(255,255,255,0.3)] p-2 px-4 pr-20"
      key={name}
      onClick={handler}
    >
      <div
        className="flex flex-col justify-center
        items-start space-y-0.5 p-2"
      >
        <div
          className={` p-0 px-2 rounded-xl text-xs ${
            served === "hot" ? "bg-dark-coffee" : "bg-light-coffee"
          }`}
        >
          <p className="mt-0.5 capitalize">{served}</p>
        </div>
        <h4 className="capatilize font-medium text-xl whitespace-nowrap">
          {name}
        </h4>
      </div>
      <p className="text-ellipsis opacity-70 text-sm whitespace-nowrap overflow-hidden pl-10">
        {description}
      </p>
    </div>
  );
}
