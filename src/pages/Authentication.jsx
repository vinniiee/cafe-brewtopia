
import { useState } from "react";
import Signin from "../components/authentication/Signin";
import Signup from "../components/authentication/Signup";

export default function Authentication() {
  const [register,setRegister] = useState(false);
  return (
    <Signup setRegister={setRegister} register={register} />
  );
}
