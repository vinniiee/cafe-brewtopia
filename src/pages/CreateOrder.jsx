import { useSelector } from "react-redux";
import OrderList from "../components/cart/OrderList";
import DeliveryOptions from "../components/order/DeliveryOptions";
import PaymentDetails from "../components/order/PaymentDetails";

export default function CreateOrder() {
  const cart = useSelector((state) => state.cart.data);

  return (
    <div
      className="flex flex-col  justify-start items-center
       h-screen w-screen bg-cover font-primary
       p-8 overflow-scroll"
      style={{ backgroundImage: "url(/wall.jpg)" }}
    >
      <div className="bg-black/90 w-full">
      <div
        className=" justify-start items-center
       py-16 p-8 sm:p-16 rounded  flex flex-col md:justify-around md:px-20   md:space-x-8 md:flex-row space-y-8 font-primary"
      >
        <div className="w-full flex flex-col max-w-lg  space-y-6 justify-start items-center">
          <OrderList cart={cart} />
          <DeliveryOptions />
        </div>
        <PaymentDetails />
      </div>
      </div>
    </div>
  );
}
