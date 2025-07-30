import React from 'react'

const TextareaField = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="text-sm font-medium text-[#344054] mb-[6px] block">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full p-2 border border-[#D0D5DD] rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#7A2060]"
      />
    </div>
  )
}

export default TextareaField
