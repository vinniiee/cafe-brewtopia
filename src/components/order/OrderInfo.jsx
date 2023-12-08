import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { updateStatus } from "../../utils/updateStatus";
import OrderList from "../cart/OrderList";

// eslint-disable-next-line react/prop-types
export default function OrderInfo({ order }) {
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const { eta, cart, id, location } = order;
  let minutesLeft;
  let formattedEta;

  formattedEta = formatDate(new Date(eta));
  minutesLeft = ("" + (eta - Date.now()) / 60000 + 1).split(".")[0];
  let status = updateStatus(order);
  return (
    <div
      className="w-full flex flex-col justify-center
         items-center space-y-3 text-white bg-light-coffee p-4 rounded"
    >
      <div
        className="w-full flex justify-between 
      items-center"
      >
        <button onClick={()=>navigate(`/order/${id}`)} className="sm:text-2xl text-md whitespace-nowrap tracking-tight border-b-2 hover:tracking-wide hover:-translate-y-0.5 border-transparent hover:border-white duration-200">
          <span className="sm:inline hidden">Info for</span> Order ID#{" "}
          <span className="uppercase">{`${id
            // eslint-disable-next-line react/prop-types
            .split("-")
            .join("")
            .substring(1, 15)}`}</span>
        </button>
        <p
          className="bg-dark-coffee p-4 py-2 uppercase rounded-sm
           font-medium tracking-widest shadow"
        >
          {status}
        </p>
      </div>
      <div className="w-full flex justify-between shadow items-center p-4 rounded font-light sm:text-sm text-xs whitespace-nowrap bg-dark-coffee">
        {status !== "delivered" ? (
          <>
            <p className="hidden sm:flex">{`Will be ${
              location === "home" ? "at your doorstep" : "served"
            } in ${minutesLeft} minutes.`}</p>
            <p>{`( ETA: ${formattedEta} )`}</p>
          </>
        ) : (
          <>
            <p className="hidden sm:flex">{`${
              location === "home"
                ? "Delivered to your home."
                : "Served at the Cafe."
            } `}</p>
            <p>{`( Delivered At: ${formattedEta} )`}</p>
          </>
        )}
      </div>
      <div className="max-w-2xl drop-shadow w-full max-h-[300px] overflow-scroll">
        <OrderList order={cart} />
      </div>
      <div className="w-full flex shadow tracking-wider justify-between items-center p-4 rounded text-xl  bg-dark-coffee">
        <p>Total</p>
         {/* eslint-disable-next-line react/prop-types */}
        <p>{cart.totalPrice}/-</p>
      </div>
    </div>
  );
}
