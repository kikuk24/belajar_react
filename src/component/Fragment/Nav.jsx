import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className="flex justify-end bg-blue-500 h-20 text-white items-center px-10">{username}
      <Button classname="ml-5 bg-red-500" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}

export default Nav