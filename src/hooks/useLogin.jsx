// custom Hooks
import { getUsername } from '../services/auth.services'
import { useEffect, useState } from "react";
export const useLogin = () => {
  const [username,setUsername] = useState("");
  
useEffect(() => {
  const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
  }
}, []);
  
  return username;
}
  