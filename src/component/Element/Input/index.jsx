import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"

const InputForm = forwardRef((props, ref) => {
  const { title, name,type,placeholder } = props
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{ title }</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
    </div>
  )
})

export default InputForm