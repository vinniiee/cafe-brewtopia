export default function SearchBar() {
  return (
    <div className="flex justify-center items-center w-full lg:w-2/3">
      <div className="w-[20px] -mr-8 z-20">
        <img className="w-full" src="/ui/search-icon.svg" alt="search-icon" />
      </div>
      <input
        className="bg-black/40 p-2 px-4 pl-12
                tracking-wide  font-light
                rounded w-full lg:w-1/2 z-10 outline-none borber-black
                text-white "
        type="text"
        placeholder="Search Coffee..."
      />
    </div>
  );
}
