import Button from "../Element/Button/Button"
import InputForm from "../Element/Input"

const FormReg = () => {
  return (
    <form action="">
      <InputForm title="Full Name" placeholder="your full name" type="text" name="fullName"/>
      <InputForm title="Email" placeholder="example@gmail.com" type="email" name="email"/>
      <InputForm title="Password" placeholder="***" type="password"/>
      <InputForm title="Confirm Password" placeholder="***" type="password"/>
      <Button classname="bg-blue-500 hover:bg-blue-900 w-full">Register</Button>
    </form>
  )
}

export default FormReg