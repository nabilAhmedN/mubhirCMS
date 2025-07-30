import React from 'react'

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-[6px]">
      <label className="w-[320px] text-sm text-gray-600 font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-[320px] h-[44px] border border-[#D5D7DA] rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
