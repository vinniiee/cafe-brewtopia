import { createContext, useContext } from "react";
import { useUser } from "../../features/authentication/useUser";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../services/apiOrder";
import { clearCart } from "../../store";
import { useNavigate } from "react-router-dom";

const UserDetailsContext = createContext();

// eslint-disable-next-line react/prop-types
function UserDetails({ children, location }) {
  const { user } = useUser();
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handler(data) {
    console.log("form-data", data);
    const servingDetails = { ...data };
    const order = await placeOrder({ user, cart, servingDetails });
    console.log("Placed Order: ", order);
    dispatch(clearCart({ cart }));
    navigate(`/order/${order.id}`);
  }
  const formHandler = () => {
    handleSubmit(handler)();
  };

  return (
    <UserDetailsContext.Provider
      value={{ register, formHandler, location, errors, user }}
    >
      <div
        className="flex flex-col bg-dark-coffee rounded
      p-8 w-full max-w-sm text-white justify-around items-center space-y-4"
      >
        {children}
      </div>
    </UserDetailsContext.Provider>
  );
}

// eslint-disable-next-line react/prop-types
function InputFields() {
  const { user, register, errors, formHandler, location } =
    useContext(UserDetailsContext);

  return (
    <div className="border-b-2 border-white/40 w-full">
      <form
        className="w-full max-w-sm my-8 flex flex-col
           justify-start items-start space-y-4 py-8
           "
        onSubmit={formHandler}
      >
        <div className="flex flex-col w-full justify-start items-start ">
          <label className="text-sm">Name</label>
          <div className="relative w-full">
            <input
              className="w-full text-night shadow rounded-sm
                bg-white p-2 pr-10 border-none outline-none
                text-lg tracking-wide"
              type="text"
              defaultValue={user?.name}
              {...register("name", { required: true })}
            />
            {/* {errors.name && ( */}
            <p
              className={`text-light-coffee text-sm mt-1  ${
                errors.name ? "opacity-100" : "opacity-0"
              } `}
            >
              This field is required.
            </p>
            {/* )} */}
            <div className="absolute right-3 bottom-10">
              <img className="w-4" src="/ui/check.svg" />
            </div>
          </div>
        </div>
        {location === undefined && (
          <div className="flex flex-col w-full justify-start items-start ">
            <label className="text-sm">Email Address</label>
            <div className="relative w-full">
              <input
                className="w-full text-night shadow rounded-sm
                bg-white p-2 pr-10 border-none outline-none
                text-lg tracking-wide"
                // type="email"
                defaultValue={user?.email}
                {...register("email", {
                  required: true,
                  pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                })}
              />
              <p
                className={`text-light-coffee text-sm mt-1  ${
                  errors.email ? "opacity-100" : "opacity-0"
                } `}
              >
                {errors.email?.type === "pattern"
                  ? "Invalid email address."
                  : "This field is required."}
              </p>
              <div className="absolute right-3 bottom-10">
                <img className="w-4" src="/ui/check.svg" />
              </div>
            </div>
          </div>
        )}
        {location !== "restaurant" && (
          <div className="flex flex-col w-full justify-start items-start ">
            <label className="text-sm">Delivery Address</label>
            <div className="relative w-full">
              <input
                className="w-full text-night shadow rounded-sm
                bg-white p-2 pr-10 border-none outline-none
                text-lg tracking-wide"
                type="text"
                defaultValue={user?.address}
                {...register("address", {
                  required: true,
                  // pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g ,
                })}
              />
              <p
                className={`text-light-coffee text-sm mt-1  ${
                  errors.address ? "opacity-100" : "opacity-0"
                } `}
              >
                This field is required.
              </p>
              <div className="absolute right-2 bottom-9">
                <img className="w-6" src="/ui/location.svg" />
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Submit({ children }) {
  const { formHandler } = useContext(UserDetailsContext);
  // function handler(data) {
  //   console.log(data);
  // }
  return (
    <button
      onClick={formHandler}
      className="uppercase bg-black text-white text-xl sm:text-2xl tracking-wider rounded-sm w-full p-3 "
    >
      {children}
    </button>
  );
}

UserDetails.Submit = Submit;
UserDetails.InputFields = InputFields;

export default UserDetails;
