import React from 'react'

const Button = ({text}) => {

  return (
    <div className="bg-[#F28D35] w-fit h-[38px] rounded-[4px] py-[12px] px-[20px] content-center text-white text-sm font-bold">
        <button>{text}</button>
    </div>
  )
}

export default Button