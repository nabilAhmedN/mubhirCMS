// import React, { useState } from 'react';
// import InputField from '../../components/InputField/InputField';
// import SocialInputWithToggle from '../../components/SocialInputWithToggle/SocialInputWithToggle';
// import Button from '../../components/Button/Button';

// const TitleSection = () => {
//   const [formData, setFormData] = useState({
//     text: "",
//     subtitle: "",
//     ctaText: "",
//     ctaLink: "",
//   });
//   const [avatars, setAvatars] = useState([]);
//   const maxAvatars = 3;

//   const handleFileDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     if (file && avatars.length < maxAvatars) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setAvatars([...avatars, e.target.result]);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleAvatarUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && avatars.length < maxAvatars) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setAvatars([...avatars, e.target.result]);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeAvatar = (index) => {
//     setAvatars(avatars.filter((_, i) => i !== index));
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [socialLinks, setSocialLinks] = useState({
//     WhatsApp: "",
//     Instagram: "",
//     TikTok: "",
//     YouTube: "",
//     X: "",
//     Facebook: "",
//   });

//   const [enabledPlatforms, setEnabledPlatforms] = useState({
//     WhatsApp: true,
//     Instagram: false,
//     TikTok: true,
//     YouTube: true,
//     X: true,
//     Facebook: true,
//   });

//   const handleSocialChange = (e) => {
//     const { name, value } = e.target;
//     setSocialLinks((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleToggle = (platform) => {
//     setEnabledPlatforms((prev) => ({
//       ...prev,
//       [platform]: !prev[platform],
//     }));
//   };

//   return (
//     <div className="w-[720px] bg-white rounded-lg shadow-md text-black border-1 border-[#D0D5DD]">
//       {/* Title Section */}
//       <h2 className="text-lg text-[#101828] px-[16px] py-[22px] font-semibold mb-4 border-b-1 border-[#EAECF0]">
//         Title Section
//       </h2>

//       {/* Main Text Section */}
//       <div className="mb-6 px-6">
//         <h3 className="text-lg font-medium mb-2 text-[#101828]">Main Text</h3>
//         <div className="space-y-[20px]">
//           <InputField
//             label="Text"
//             name="text"
//             placeholder="Enter title here"
//             value={formData.text}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Subtitle"
//             name="subtitle"
//             placeholder="Enter description here"
//             value={formData.subtitle}
//             onChange={handleChange}
//           />
//           <InputField
//             label="CTA Text"
//             name="ctaText"
//             placeholder="Enter CTA text here"
//             value={formData.ctaText}
//             onChange={handleChange}
//           />
//           <InputField
//             label="CTA Link"
//             name="ctaLink"
//             placeholder="Enter CTA link here"
//             value={formData.ctaLink}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* Bottom-left Avatars and Subtitle */}
//       <div className="mb-[32px] px-6">
//         <h2 className="text-lg font-medium mb-2 text-[#101828]">Bottom-left Avatars and Subtitle</h2>
//         <div className="mt-2">
//           <p className="text-sm font-medium text-[#344054]">Avatars ({avatars.length} / {maxAvatars} Max)</p>
//           <div className="flex space-x-4 mt-2">
//             {avatars.length < maxAvatars && (
//               <label
//                 onDrop={handleFileDrop}
//                 onDragOver={handleDragOver}
//                 onDragEnter={(e) => e.preventDefault()}
//                 className="w-[128px] h-[128px] border-2 border-[#A16A99] border-dashed rounded-lg p-[13.5px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
//               >
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleAvatarUpload}
//                   className="hidden"
//                 />
//                 <div className="text-xs text-[#475467] font-normal flex flex-col items-center">
                //   <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                //     <g filter="url(#filter0_d_4309_114441)">
                //       <path d="M10 1.5H34C38.1421 1.5 41.5 4.85786 41.5 9V33C41.5 37.1421 38.1421 40.5 34 40.5H10C5.85786 40.5 2.5 37.1421 2.5 33V9C2.5 4.85786 5.85786 1.5 10 1.5Z" stroke="#EAECF0" shape-rendering="crispEdges"/>
                //       <path d="M21.9998 21L22.5891 20.4107C22.2637 20.0853 21.736 20.0853 21.4106 20.4107L21.9998 21ZM21.1665 28.5C21.1665 28.9602 21.5396 29.3333 21.9998 29.3333C22.4601 29.3333 22.8332 28.9602 22.8332 28.5H21.1665ZM25.3049 16.5814L26.0229 16.1584L26.0229 16.1584L25.3049 16.5814ZM14.8986 24.7495C15.2235 25.0755 15.7511 25.0765 16.0771 24.7516C16.4032 24.4268 16.4041 23.8991 16.0793 23.5731L14.8986 24.7495ZM18.6665 24.3333L19.2558 24.9226L22.5891 21.5893L21.9998 21L21.4106 20.4107L18.0772 23.7441L18.6665 24.3333ZM21.9998 21L21.4106 21.5893L24.7439 24.9226L25.3332 24.3333L25.9224 23.7441L22.5891 20.4107L21.9998 21ZM21.9998 21H21.1665V28.5H21.9998H22.8332V21H21.9998ZM13.6665 19.75H14.4998C14.4998 16.7585 16.925 14.3333 19.9165 14.3333V13.5V12.6667C16.0045 12.6667 12.8332 15.838 12.8332 19.75H13.6665ZM19.9165 13.5V14.3333C21.9048 14.3333 23.6439 15.4041 24.587 17.0045L25.3049 16.5814L26.0229 16.1584C24.7926 14.0706 22.5189 12.6667 19.9165 12.6667V13.5ZM25.7498 16.8333V17.6667C27.8209 17.6667 29.4998 19.3456 29.4998 21.4167H30.3332H31.1665C31.1665 18.4251 28.7414 16 25.7498 16V16.8333ZM30.3332 21.4167H29.4998C29.4998 22.5809 28.9703 23.6207 28.1359 24.3098L28.6665 24.9524L29.1972 25.5949C30.3985 24.6027 31.1665 23.099 31.1665 21.4167H30.3332ZM15.489 24.1613L16.0793 23.5731C15.1023 22.5925 14.4998 21.2424 14.4998 19.75H13.6665H12.8332C12.8332 21.7011 13.6231 23.4693 14.8986 24.7495L15.489 24.1613ZM25.3049 16.5814L24.587 17.0045C24.833 17.4219 25.2801 17.6667 25.7498 17.6667V16.8333V16C25.8554 16 25.9618 16.0547 26.0229 16.1584L25.3049 16.5814Z" fill="#344054"/>
                //     </g>
                //     <defs>
                //       <filter id="filter0_d_4309_114441" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                //         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                //         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                //         <feOffset dy="1"/>
                //         <feGaussianBlur stdDeviation="1"/>
                //         <feComposite in2="hardAlpha" operator="out"/>
                //         <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                //         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4309_114441"/>
                //         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4309_114441" result="shape"/>
                //       </filter>
                //     </defs>
                //   </svg>
//                   <span className="text-[#521749] text-sm font-semibold">Click to upload</span>
//                   or drag and drop <br /> (Max: 256x156px)
//                 </div>
//               </label>
//             )}
//             {avatars.map((avatar, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={avatar}
//                   alt={`Avatar ${index + 1}`}
//                   className="w-[128px] h-[128px] rounded-lg object-cover"
//                 />
//                 <button
//                   onClick={() => removeAvatar(index)}
//                   className="absolute top-[8px] right-[8px] cursor-pointer flex items-center justify-center"
//                 >
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#182230" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
//                   </svg>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-4">
//           <InputField
//             label="Subtitle"
//             name="subtitle"
//             placeholder="Enter subtitle here"
//             value={formData.subtitle}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* Links to Socials */}
//       <div className="mb-6 px-6">
//         <h3 className="text-lg font-medium mb-2 text-[#101828]">Links to Socials</h3>
//         <div className="space-y-[20px]">
//           {Object.keys(socialLinks).map((platform) => (
//             <SocialInputWithToggle
//               key={platform}
//               platform={platform}
//               value={socialLinks[platform]}
//               enabled={enabledPlatforms[platform]}
//               onChange={handleSocialChange}
//               onToggle={() => handleToggle(platform)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-end space-x-4 border-t-1 border-[#EAECF0] py-[16px] pr-[16px]">
//         <Button variant="outline">Discard</Button>
//         <Button variant="primary">Save</Button>
//       </div>
//     </div>
//   );
// };

// export default TitleSection;

import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import SocialInputWithToggle from '../../components/SocialInputWithToggle/SocialInputWithToggle';
import Button from '../../components/Button/Button';

const TitleSection = () => {
  const [formData, setFormData] = useState({
    text: "",
    subtitle: "",
    ctaText: "",
    ctaLink: "",
  });

  const [avatars, setAvatars] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    WhatsApp: "",
    Instagram: "",
    TikTok: "",
    YouTube: "",
    X: "",
    Facebook: "",
  });

  const [enabledPlatforms, setEnabledPlatforms] = useState({
    WhatsApp: true,
    Instagram: false,
    TikTok: true,
    YouTube: true,
    X: true,
    Facebook: true,
  });

  const [savedData, setSavedData] = useState(null);
  const maxAvatars = 3;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (platform) => {
    setEnabledPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && avatars.length < maxAvatars) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatars([...avatars, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file && avatars.length < maxAvatars) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatars([...avatars, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = (index) => {
    setAvatars(avatars.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    setSavedData({
      ...formData,
      avatars,
      socialLinks,
      enabledPlatforms,
    });
  };

  const handleDiscard = () => {
    setFormData({
      text: "",
      subtitle: "",
      ctaText: "",
      ctaLink: "",
    });
    setAvatars([]);
    setSocialLinks({
      WhatsApp: "",
      Instagram: "",
      TikTok: "",
      YouTube: "",
      X: "",
      Facebook: "",
    });
    setEnabledPlatforms({
      WhatsApp: true,
      Instagram: false,
      TikTok: true,
      YouTube: true,
      X: true,
      Facebook: true,
    });
    setSavedData(null);
  };

  return (
    <div className="w-[720px] bg-white rounded-lg shadow-md text-black border-1 border-[#D0D5DD] mb-10">
      {/* Title Section */}
      <h2 className="text-lg text-[#101828] px-[16px] py-[22px] font-semibold mb-4 border-b-1 border-[#EAECF0]">
        Title Section
      </h2>

      {/* Main Text Section */}
      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">Main Text</h3>
        <div className="space-y-[20px]">
          <InputField label="Text" name="text" placeholder="Enter title here" value={formData.text} onChange={handleChange} />
          <InputField label="Subtitle" name="subtitle" placeholder="Enter description here" value={formData.subtitle} onChange={handleChange} />
          <InputField label="CTA Text" name="ctaText" placeholder="Enter CTA text here" value={formData.ctaText} onChange={handleChange} />
          <InputField label="CTA Link" name="ctaLink" placeholder="Enter CTA link here" value={formData.ctaLink} onChange={handleChange} />
        </div>
      </div>

      {/* Avatar Upload */}
      <div className="mb-[32px] px-6">
        <h2 className="text-lg font-medium mb-2 text-[#101828]">Bottom-left Avatars and Subtitle</h2>
        <p className="text-sm font-medium text-[#344054]">Avatars ({avatars.length} / {maxAvatars} Max)</p>
        <div className="flex space-x-4 mt-2">
          {avatars.length < maxAvatars && (
            <label
              onDrop={handleFileDrop}
              onDragOver={handleDragOver}
              className="w-[128px] h-[128px] border-2 border-[#A16A99] border-dashed rounded-lg p-[13.5px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
              <div className="text-xs text-[#475467] font-normal flex flex-col items-center">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_4309_114441)">
                      <path d="M10 1.5H34C38.1421 1.5 41.5 4.85786 41.5 9V33C41.5 37.1421 38.1421 40.5 34 40.5H10C5.85786 40.5 2.5 37.1421 2.5 33V9C2.5 4.85786 5.85786 1.5 10 1.5Z" stroke="#EAECF0" shape-rendering="crispEdges"/>
                      <path d="M21.9998 21L22.5891 20.4107C22.2637 20.0853 21.736 20.0853 21.4106 20.4107L21.9998 21ZM21.1665 28.5C21.1665 28.9602 21.5396 29.3333 21.9998 29.3333C22.4601 29.3333 22.8332 28.9602 22.8332 28.5H21.1665ZM25.3049 16.5814L26.0229 16.1584L26.0229 16.1584L25.3049 16.5814ZM14.8986 24.7495C15.2235 25.0755 15.7511 25.0765 16.0771 24.7516C16.4032 24.4268 16.4041 23.8991 16.0793 23.5731L14.8986 24.7495ZM18.6665 24.3333L19.2558 24.9226L22.5891 21.5893L21.9998 21L21.4106 20.4107L18.0772 23.7441L18.6665 24.3333ZM21.9998 21L21.4106 21.5893L24.7439 24.9226L25.3332 24.3333L25.9224 23.7441L22.5891 20.4107L21.9998 21ZM21.9998 21H21.1665V28.5H21.9998H22.8332V21H21.9998ZM13.6665 19.75H14.4998C14.4998 16.7585 16.925 14.3333 19.9165 14.3333V13.5V12.6667C16.0045 12.6667 12.8332 15.838 12.8332 19.75H13.6665ZM19.9165 13.5V14.3333C21.9048 14.3333 23.6439 15.4041 24.587 17.0045L25.3049 16.5814L26.0229 16.1584C24.7926 14.0706 22.5189 12.6667 19.9165 12.6667V13.5ZM25.7498 16.8333V17.6667C27.8209 17.6667 29.4998 19.3456 29.4998 21.4167H30.3332H31.1665C31.1665 18.4251 28.7414 16 25.7498 16V16.8333ZM30.3332 21.4167H29.4998C29.4998 22.5809 28.9703 23.6207 28.1359 24.3098L28.6665 24.9524L29.1972 25.5949C30.3985 24.6027 31.1665 23.099 31.1665 21.4167H30.3332ZM15.489 24.1613L16.0793 23.5731C15.1023 22.5925 14.4998 21.2424 14.4998 19.75H13.6665H12.8332C12.8332 21.7011 13.6231 23.4693 14.8986 24.7495L15.489 24.1613ZM25.3049 16.5814L24.587 17.0045C24.833 17.4219 25.2801 17.6667 25.7498 17.6667V16.8333V16C25.8554 16 25.9618 16.0547 26.0229 16.1584L25.3049 16.5814Z" fill="#344054"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_4309_114441" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4309_114441"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4309_114441" result="shape"/>
                      </filter>
                    </defs>
                </svg>
                <span className="text-[#521749] text-sm font-semibold">Click to upload</span>
                or drag and drop <br /> (Max: 256x156px)
              </div>
            </label>
          )}
          {avatars.map((avatar, index) => (
            <div key={index} className="relative">
              <img src={avatar} alt={`Avatar ${index + 1}`} className="w-[128px] h-[128px] rounded-lg object-cover" />
              <button onClick={() => removeAvatar(index)} className="absolute top-[8px] right-[8px]">
                ❌
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <InputField label="Subtitle" name="subtitle" placeholder="Enter subtitle here" value={formData.subtitle} onChange={handleChange} />
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">Links to Socials</h3>
        <div className="space-y-[20px]">
          {Object.keys(socialLinks).map((platform) => (
            <SocialInputWithToggle
              key={platform}
              platform={platform}
              value={socialLinks[platform]}
              enabled={enabledPlatforms[platform]}
              onChange={handleSocialChange}
              onToggle={() => handleToggle(platform)}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 border-t-1 border-[#EAECF0] py-[16px] pr-[16px]">
        <Button variant="outline" onClick={handleDiscard}>Discard</Button>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </div>

      {/* Saved Data Preview */}
      {savedData && (
        <div className="p-6 mt-4 border-t border-gray-200 bg-gray-50 text-sm">
          <h3 className="text-lg font-bold mb-4 text-[#101828]">Saved Data</h3>
          <p><strong>Text:</strong> {savedData.text}</p>
          <p><strong>Subtitle:</strong> {savedData.subtitle}</p>
          <p><strong>CTA Text:</strong> {savedData.ctaText}</p>
          <p><strong>CTA Link:</strong> {savedData.ctaLink}</p>

          <div className="mt-4">
            <strong>Avatars:</strong>
            <div className="flex gap-4 mt-2">
              {savedData.avatars.map((avatar, index) => (
                <img key={index} src={avatar} alt={`Saved avatar ${index}`} className="w-16 h-16 object-cover rounded" />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <strong>Social Links:</strong>
            <ol className="list-disc ml-5 mt-2">
              {Object.entries(savedData.socialLinks).map(([platform, link]) => (
                savedData.enabledPlatforms[platform] && link && (
                  <li key={platform}>
                    <strong>{platform}:</strong> {link}
                  </li>
                )
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleSection;
