import Beans from "../../assets/Beans";




// eslint-disable-next-line react/prop-types
export default function SearchResults({ loading, searchResults }) {
  searchResults = (
    <>
      {/* eslint-disable-next-line react/prop-types*/}
      {searchResults?.length > 0 ? (
        searchResults
      ) : (
        <p className="w-full text-center mt-8 opacity-90 tracking-wider">
          No Coffee Found.
        </p>
      )}
      <div className="relative flex w-full justify-end py-4 bottom-0">
        <Beans size={75} color={"dark-coffee-2"} />
      </div>
    </>
  );
  return (
    <div
      
      className="absolute w-full max-h-[400px]
         overflow-scroll flex flex-col text-white top-12 -ml-3  bg-black rounded z-50"
    >
      {loading ? (
        <p className="  text-center tracking-wider opacity-90 py-6">
          Searching...
        </p>
      ) : focus ? (
        searchResults
      ) : (
        <></>
      )}
    </div>
  );
}
