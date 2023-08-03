import { useEffect, useRef, useState } from "react";
import Button from "../Element/Button/Button"
import InputForm from "../Element/Input"
import { login } from "../../services/auth.services";

const FormLogin = () => {
  const [loginFail, setLoginFail] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", email);
    // localStorage.setItem("pw", password);
    // window.location.href = "/product"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product"
      }else {
        setLoginFail(res.response.data);
      }
    });
  }
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current.focus();
  },[])
  return (
    <form onSubmit={handleLogin}>
      <InputForm title="Username" placeholder="example@gmail.com" type="text" name="username" ref={usernameRef}/>
      <InputForm title="Password" placeholder="***" type="password" name="password"/>
      <Button classname="bg-blue-500 hover:bg-blue-900 w-full" type="submit" >Login</Button>
      {loginFail && <p className="text-red-500 text-center">{loginFail}</p>}
    </form>
  )
}

export default FormLogin