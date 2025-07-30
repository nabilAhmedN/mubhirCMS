import React from 'react'

const RadioToggle = ({ options, name, selected, onChange }) => {
  return (
    <div className="flex space-x-2">
      {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <label
            key={option.value}
            className={`flex items-center px-4 py-2 rounded-full border cursor-pointer text-sm font-medium
              ${isSelected
                ? "bg-[#F1E9F0] border-[#A16A99] text-[#101828]"
                : "bg-[#FFFFFF] border-[#D0D5DD] text-[#101828]"
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center
                ${isSelected ? "border-[#691D5E] border-4" : "border-[#D0D5DD]"}
              `}
            >
              {isSelected && (
                <span className="w-2 h-2 bg-[#FFFFFF] rounded-full"></span>
              )}
            </span>
            {option.label}
          </label>
        );
      })}
    </div>
  )
}

export default RadioToggle
