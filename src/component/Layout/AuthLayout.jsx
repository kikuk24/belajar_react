import React from 'react'
import { Link } from 'react-router-dom'
const AuthLayout = (props) => {
  const { title, desc, children, type } = props
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
      <p className="font-medium text-slate-500 mb-3">{desc}</p>
      {children}
      <p className="text-sm mt-5 text-center">
        {type === "login"
          ? "Don't have an account " 
          : "Already an account "}
        {type === "login" && (
        <Link to="/register" className="font-bold text-blue-600">Register</Link>
        )}
        {type === "register" && (
        <Link to="/login" className="font-bold text-blue-600">Login</Link>
        )}
        </p>
    </div>
  )
}

export default AuthLayout