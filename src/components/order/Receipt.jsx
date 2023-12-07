import { useEffect } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export default function Receipt({ location }) {
  useEffect(() => {}, [location]);
  const cart = useSelector((state) => state.cart.data);

  const delivery = location === "home" ? 120 : 0;

  const total = delivery + cart?.totalPrice;
  const discount = total > 1250 ? -200 : 0;

  return (
    <div
      className="flex w-full flex-col sm:text-lg
          font-light  py-8 "
    >
      <div className="w-full border-b-2 border-white/30 pb-8 sm:px-6 whitespace-nowrap">
        <div className="flex w-full justify-between items-center">
          <p>Subtotal</p>
          <p>&#8377; {cart?.totalPrice} /-</p>
        </div>
        {delivery > 0 && (
          <div className="flex w-full justify-between items-center">
            <p>Delivery Charges</p>
            <p>&#8377; {delivery} /-</p>
          </div>
        )}
        {total > 1250 && (
          <div className="flex w-full justify-between font-normal text-light-coffee items-center">
            <p>Membership Discount</p>
            <p>&#8377; {discount} /-</p>
          </div>
        )}
      </div>
      <div
        className="flex justify-between items-center
             p-4 font-medium text-xl sm:text-2xl tracking-wider px-0 text-white/90"
      >
        <p>Total</p>
        <p>&#8377; {total - discount > 0 ? total : 0} /-</p>
      </div>
    </div>
  );
}
