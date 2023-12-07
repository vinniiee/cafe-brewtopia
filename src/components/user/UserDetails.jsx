import OrderForm from "../order/OrderForm";

export default function UserDetails() {
  return (
    <div
      className="flex flex-col bg-dark-coffee text-white/95 w-full justify-center items-start
        max-w-sm p-8 tracking-wide"
    >
      <h3 className="sm:text-4xl text-3xl border-b-2 border-white/40  w-full text-left pb-2 ">
        User Info
      </h3>
      <OrderForm />
      {/* <div
        className="flex w-full flex-col   sm:text-lg
          font-light  py-8 "
      >
        <div className="w-full border-b-2 border-white/30 pb-8 sm:px-6 whitespace-nowrap">
          <div className="flex w-full justify-between items-center">
            <p>Subtotal</p>
            <p>&#8377; 2220 /-</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p>Delivery Charges</p>
            <p>&#8377; 120 /-</p>
          </div>
          <div className="flex w-full justify-between font-normal text-light-coffee items-center">
            <p>Membership Discount</p>
            <p>&#8377; 200 /-</p>
          </div>
        </div>
        <div
          className="flex justify-between items-center
             p-4 font-medium text-xl sm:text-2xl tracking-wider px-0 text-white/90"
        >
          <p>Total</p>
          <p>&#8377; 2300 /-</p>
        </div>
      </div> */}
      <button className="uppercase mt-8 bg-black text-xl sm:text-2xl tracking-wider rounded-sm w-full p-3 ">
        submit changes
      </button>
    </div>
  )
}
