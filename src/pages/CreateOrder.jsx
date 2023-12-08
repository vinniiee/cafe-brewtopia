import { useSelector } from "react-redux";
import OrderList from "../components/cart/OrderList";
import DeliveryOptions from "../components/order/DeliveryOptions";
import PaymentDetails from "../components/order/PaymentDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateOrder() {
  const cart = useSelector((state) => state.cart.data);
  const navigate = useNavigate();
  useEffect(()=>{
    if(cart?.totalQuantity===0){
      navigate(-1,{replace:true});
    }
  })
  const [location,setLocation] = useState('restaurant');
  return (
    <div
      className="flex flex-col  justify-start items-center
       min-h-screen w-screen bg-cover font-primary
       p-8 "
      style={{ backgroundImage: "url(/wall.jpg)" }}
    >
      <div className="bg-black/90 w-full">
      <div
        className=" justify-start items-center
       py-16 p-8 sm:p-16 rounded  flex flex-col md:justify-around md:px-20   md:space-x-8 md:flex-row space-y-8 font-primary"
      >
        <div className="w-full flex flex-col max-w-lg  space-y-6 justify-start items-center">
          <OrderList order={cart} />
          <DeliveryOptions location={location} setLocation={setLocation} />
        </div>
        <PaymentDetails location={location} />
      </div>
      </div>
    </div>
  );
}
