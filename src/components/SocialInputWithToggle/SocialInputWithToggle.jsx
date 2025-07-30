import React from 'react'

function SocialInputWithToggle({ platform, value, onChange, enabled, onToggle, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-[#344054] mb-[6px] block">
        {platform}
      </label>

      {/* Input + Switch aligned center */}
      <div className="flex items-center gap-4">
        <input
          type="url"
          name={platform}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Enter/paste URL"}
          disabled={!enabled}
          className={`w-full p-2 border rounded border-[#D0D5DD] ${
            !enabled ? "bg-gray-100 cursor-not-allowed text-gray-400 border-[#D0D5DD]" : ""
          }`}
        />

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
    </div>
  )
}

export default SocialInputWithToggle
