export default function OrderForm() {
  return (
    <div className="border-b-2 border-white/40 w-full">
      <form
        className="w-full max-w-sm my-8 flex flex-col
           justify-start items-start space-y-4 py-8
           "
      >
        <div className="flex flex-col w-full justify-start items-start ">
          <label className="text-sm">Name</label>
          <div className="relative w-full">
            <input
              className="w-full text-night shadow rounded-sm
                bg-white p-2 pr-10 border-none outline-none
                text-lg tracking-wide"
              type="text"
            />
            <div className="absolute right-3 bottom-3.5">
              <img className="w-4" src="/ui/check.svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start items-start ">
          <label className="text-sm">Email Address</label>
          <div className="relative w-full">
            <input
              className="w-full text-night shadow rounded-sm
                bg-white p-2 pr-10 border-none outline-none
                text-lg tracking-wide"
              type="email"
            />
            <div className="absolute right-3 bottom-3.5">
              <img className="w-4" src="/ui/check.svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start items-start ">
          <label className="text-sm">Delivery Address</label>
          <div className="relative w-full">
            <input
              className="w-full text-night shadow rounded-sm
                bg-white p-2 pr-10 border-none outline-none
                text-lg tracking-wide"
              type="text"
            />
            <div className="absolute right-2 bottom-2.5">
              <img className="w-6" src="/ui/location.svg" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
