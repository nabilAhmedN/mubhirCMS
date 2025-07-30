import React from 'react'

const InputField = ({ label, placeholder, value, onChange, name, type = "text" }) => {
  return (
    <div>
      <label className="text-sm font-medium text-[#344054] mb-[6px] block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded border-[#D0D5DD]"
      />
    </div>
  )
}

export default InputField
