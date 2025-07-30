import React from 'react'

const Demo = () => {
  return (
    <div className="w-[720px] mx-auto p-6 bg-white rounded-lg shadow border space-y-8 text-left">
      <h2 className="text-xl font-semibold text-left">Title Section</h2>

      {/* Main Text */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-left">Title</label>
          <input type="text" placeholder="Enter title here" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-left">Subtitle</label>
          <input type="text" placeholder="Enter description here" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-left">CTA Text</label>
          <input type="text" placeholder="Enter CTA text here" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-left">CTA link</label>
          <input type="text" placeholder="Enter CTA URL here" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
      </div>

      {/* Avatars */}
      <div className="space-y-4">
        <h3 className="font-medium text-left">Bottom-left Avatars and Subtitle</h3>
        <div className="flex space-x-4 items-center">
          {avatars.map((src, index) => (
            <div key={index} className="relative w-[96px] h-[96px]">
              <img src={src} alt="Avatar" className="rounded w-full h-full object-cover" />
              <button onClick={() => handleAvatarRemove(index)} className="absolute top-0 right-0 bg-white rounded-full shadow p-1">
                ✕
              </button>
            </div>
          ))}
          {avatars.length < 3 && (
            <div className="w-[96px] h-[96px] border-2 border-dashed rounded flex items-center justify-center text-center text-sm text-gray-500 cursor-pointer">
              <div>
                <div className="text-xl">⬆️</div>
                <div>Click to upload</div>
                <div className="text-xs">Max: 256×156px</div>
              </div>
            </div>
          )}
        </div>
        <input type="text" placeholder="Enter subtitle here" className="w-full border rounded px-3 py-2" />
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="font-medium text-left">Links to Socials</h3>
        {[
          { name: "WhatsApp", enabled: true },
          { name: "Instagram", enabled: false },
          { name: "TikTok", enabled: true },
          { name: "YouTube", enabled: true },
          { name: "X", enabled: true },
          { name: "Facebook", enabled: true }
        ].map((social, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input type="text" placeholder={`Enter/paste URL`} className="w-full border rounded px-3 py-2" />
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={social.enabled} />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 peer-focus:ring-2 transition" />
            </label>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 rounded border">Discard</button>
        <button className="px-4 py-2 rounded bg-purple-700 text-white">Save</button>
      </div>
    </div>
  )
}

export default Demo
