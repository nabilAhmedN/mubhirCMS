import React from 'react'

const Toggle = ({ enabled, onToggle }) => {
  return (
    <div>
      {/* Toggle switch aligned to input */}
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            checked={enabled}
            onChange={onToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-[#eaecf0] peer-checked:bg-[#22c55e] rounded-full transition-all duration-300" />
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300" />
        </label>
    </div>
  )
}

export default Toggle
