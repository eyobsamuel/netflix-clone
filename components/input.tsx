/*
 * Created Date: Mo Mar 2023
 * Author: Phieule
 * File: input.tsx
 * Project: netflix-clone
 * -----
 * Last Modified: Mon Mar 20 2023
 * Modified By: Phieule
 * -----
 * Copyright (c) 2023 Voices of Sales Consultancy
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
interface InputProps {
  id: string
  onchange: any
  value: string
  label: string
  type?: string
  autoComplete?: string
}

const Input: React.FC<InputProps> = ({ id, onchange, value, label, type, autoComplete = 'off' }) => {
  return (
    <div className='relative'>
      <input
        type={type}
        value={value}
        onChange={onchange}
        id={id}
        className='
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                '
        placeholder=' '
        autoComplete={autoComplete}
      />
      <label
        className='
                    absolute
                    text-md
                    text-zinc-400
                    duration-150
                    transform
                    -translate-y-3
                    scale-75
                    top-4
                    z-10
                    origin-[0]
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                '
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
export default Input
