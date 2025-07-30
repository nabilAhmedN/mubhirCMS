import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';

const ValuePropositionSection = () => {
    const [formData, setFormData] = useState({
    text: "",
    subtitle: "",
    ctaText: "",
    ctaLink: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const maxForms = 3;
  const maxAvatars = 1;

  const [forms, setForms] = useState([]);

  const handleAddForm = () => {
    if (forms.length < maxForms) {
      setForms([...forms, { title: '', description: '', avatars: [] }]);
    }
  };

  const handleChangeForm = (index, e) => {
    const newForms = [...forms];
    newForms[index][e.target.name] = e.target.value;
    setForms(newForms);
  };

  const handleAvatarUpload = (formIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newForms = [...forms];
        if (newForms[formIndex].avatars.length < maxAvatars) {
          newForms[formIndex].avatars.push(e.target.result);
          setForms(newForms);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = (formIndex, avatarIndex) => {
    const newForms = [...forms];
    newForms[formIndex].avatars = newForms[formIndex].avatars.filter((_, i) => i !== avatarIndex);
    setForms(newForms);
  };

  const SaveSVG = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6.66667V13.3333M6.66667 10H13.3333M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className='w-[720px] bg-white rounded-lg shadow-md text-black border-1 border-[#D0D5DD]'>
      <h2 className="text-lg text-[#101828] px-[16px] py-[22px] font-semibold mb-4 border-b-1 border-[#EAECF0]">
        Value Proposition Section
      </h2>

      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">
          Value Proposition Entries ({forms.length} of {maxForms})
        </h3>

        {forms.map((form, index) => (
          <div key={index} className='mb-[16px]'>
            <div className="bg-[#f9fafb] border border-[#D0D5DD] rounded ">
              <div className='p-4 flex justify-between items-center bg-[#EAECF0]'>
                <button className="text-gray-600 text-xl font-bold">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0002 4.99992C10.4604 4.99992 10.8335 4.62682 10.8335 4.16659C10.8335 3.70635 10.4604 3.33325 10.0002 3.33325C9.53993 3.33325 9.16683 3.70635 9.16683 4.16659C9.16683 4.62682 9.53993 4.99992 10.0002 4.99992Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M10.0002 10.8333C10.4604 10.8333 10.8335 10.4602 10.8335 9.99992C10.8335 9.53968 10.4604 9.16659 10.0002 9.16659C9.53993 9.16659 9.16683 9.53968 9.16683 9.99992C9.16683 10.4602 9.53993 10.8333 10.0002 10.8333Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M10.0002 16.6666C10.4604 16.6666 10.8335 16.2935 10.8335 15.8333C10.8335 15.373 10.4604 14.9999 10.0002 14.9999C9.53993 14.9999 9.16683 15.373 9.16683 15.8333C9.16683 16.2935 9.53993 16.6666 10.0002 16.6666Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M15.8335 4.99992C16.2937 4.99992 16.6668 4.62682 16.6668 4.16659C16.6668 3.70635 16.2937 3.33325 15.8335 3.33325C15.3733 3.33325 15.0002 3.70635 15.0002 4.16659C15.0002 4.62682 15.3733 4.99992 15.8335 4.99992Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M15.8335 10.8333C16.2937 10.8333 16.6668 10.4602 16.6668 9.99992C16.6668 9.53968 16.2937 9.16659 15.8335 9.16659C15.3733 9.16659 15.0002 9.53968 15.0002 9.99992C15.0002 10.4602 15.3733 10.8333 15.8335 10.8333Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M15.8335 16.6666C16.2937 16.6666 16.6668 16.2935 16.6668 15.8333C16.6668 15.373 16.2937 14.9999 15.8335 14.9999C15.3733 14.9999 15.0002 15.373 15.0002 15.8333C15.0002 16.2935 15.3733 16.6666 15.8335 16.6666Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M4.16683 4.99992C4.62707 4.99992 5.00016 4.62682 5.00016 4.16659C5.00016 3.70635 4.62707 3.33325 4.16683 3.33325C3.70659 3.33325 3.3335 3.70635 3.3335 4.16659C3.3335 4.62682 3.70659 4.99992 4.16683 4.99992Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M4.16683 10.8333C4.62707 10.8333 5.00016 10.4602 5.00016 9.99992C5.00016 9.53968 4.62707 9.16659 4.16683 9.16659C3.70659 9.16659 3.3335 9.53968 3.3335 9.99992C3.3335 10.4602 3.70659 10.8333 4.16683 10.8333Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    <path d="M4.16683 16.6666C4.62707 16.6666 5.00016 16.2935 5.00016 15.8333C5.00016 15.373 4.62707 14.9999 4.16683 14.9999C3.70659 14.9999 3.3335 15.373 3.3335 15.8333C3.3335 16.2935 3.70659 16.6666 4.16683 16.6666Z" stroke="#344054" stroke-width="1.66667" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button
                  onClick={() => {
                    const updated = [...forms];
                    updated.splice(index, 1);
                    setForms(updated);
                  }}
                  className="text-gray-600 text-2xl font-bold cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#182230" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className='p-4'>
                <p className="text-sm font-medium text-[#344054] pb-[8px]">Icon</p>
                <div className="flex space-x-4 pb-[24px]">

                  {form.avatars.length < maxAvatars && (
                    <label className="w-[128px] h-[128px] border-2 border-[#A16A99] border-dashed rounded-lg p-[13.5px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleAvatarUpload(index, e)}
                        className="hidden"
                      />
                      <div className="text-xs text-[#475467] font-normal flex flex-col items-center">
                        <span className="text-[#521749] text-sm font-semibold">Click to upload</span>
                        or drag and drop
                        <br /> (Max: 256x156px)
                      </div>
                    </label>
                  )}
                  {form.avatars.map((avatar, avatarIndex) => (
                    <div key={avatarIndex} className="relative">
                      <img
                        src={avatar}
                        alt={`Avatar ${avatarIndex + 1}`}
                        className="w-[128px] h-[128px] rounded-lg object-cover"
                      />
                      <button
                        onClick={() => removeAvatar(index, avatarIndex)}
                        className="absolute top-[8px] right-[8px] cursor-pointer flex items-center justify-center"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#182230" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-[20px]">
                  <InputField
                    label="Title"
                    name="title"
                    placeholder="Enter title here"
                    value={form.title}
                    onChange={(e) => handleChangeForm(index, e)}
                  />
                  <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter description here"
                    value={form.description}
                    onChange={(e) => handleChangeForm(index, e)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          onClick={handleAddForm}
          disabled={forms.length >= maxForms}
          variant="outline"
          icon={SaveSVG}
          iconPosition="left"
        >
          Add an Entry
        </Button>
      </div>

      {/* CTA */}
      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">CTA</h3>
        <div className="space-y-[20px]">
          <InputField
            label="CTA Text"
            name="ctaText"
            placeholder="Enter CTA text here"
            value={formData.ctaText}
            onChange={handleChange}
          />
          <InputField
            label="CTA Link"
            name="ctaLink"
            placeholder="Enter CTA URL here"
            value={formData.ctaLink}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 border-t-1 border-[#EAECF0] py-[16px] pr-[16px]">
        <Button variant="outline">Discard</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
};

export default ValuePropositionSection;
