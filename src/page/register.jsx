import React from 'react'
import AuthLayout from '../component/Layout/AuthLayout'
import FormReg from '../component/Fragment/FormReg'

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AuthLayout type="register" title="Register" desc="Silahkan Register terlebih dahulu ya.">
        <FormReg></FormReg>
      </AuthLayout>
    </div>
  )
}

export default RegisterPage