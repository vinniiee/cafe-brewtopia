import { useUser } from "../features/authentication/useUser"

export default function User() {
   const {user} =  useUser();
  return (
    <div>Welcome {user.name}</div>
  )
}
