import React, { useState } from 'react'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'

const ValuePropositionSection = () => {
  const [formData, setFormData] = useState({
    text: "",
    subtitle: "",
    description: "",
  });

  const [avatars, setAvatars] = useState([]);
  const maxAvatars = 3;

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

  const handleDragOver = (event) => event.preventDefault();

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

  const SaveSVG = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6.66667V13.3333M6.66667 10H13.3333M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z"
        stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const maxForms = 3;
  const [forms, setForms] = useState([]);

  const handleAddForm = () => {
    if (forms.length < maxForms) {
      setForms([...forms, { title: "", description: "" }]);
    }
  };

  const handleChangeForm = (index, e) => {
    const newForms = [...forms];
    newForms[index][e.target.name] = e.target.value;
    setForms(newForms);
  };

  return (
    <div className="mb-6 px-6">
      <h3 className="text-lg font-medium mb-2 text-[#101828]">
        Value Proposition Entries ({forms.length} of {maxForms})
      </h3>

      {forms.map((form, index) => (
        <div key={index} className="mb-4">
          <div className="bg-[#f9fafb] border border-[#D0D5DD] rounded">
            <div className="p-4 bg-[#EAECF0] flex justify-between items-center">
              <span className="text-gray-600 text-sm font-medium">
                Entry {index + 1}
              </span>
              <button
                onClick={() => {
                  const updated = [...forms];
                  updated.splice(index, 1);
                  setForms(updated);
                }}
              >
                ❌
              </button>
            </div>

            <div className="p-4 space-y-4">
              <p className="text-sm font-medium text-[#344054]">Icon</p>
              <div className="flex space-x-4 mt-2">
                {avatars.length < maxForms && (
                  <label
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={(e) => e.preventDefault()}
                    className="w-[128px] h-[128px] border-2 border-[#A16A99] border-dashed rounded-lg p-[13.5px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                    <div className="text-xs text-[#475467] font-normal flex flex-col items-center">
                      <span className="text-[#521749] text-sm font-semibold">
                        Click to upload
                      </span>
                      or drag and drop
                      <br />
                      (Max: 256x156px)
                    </div>
                  </label>
                )}
                {avatars.map((avatar, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={avatar}
                      alt={`Avatar ${idx + 1}`}
                      className="w-[128px] h-[128px] rounded-lg object-cover"
                    />
                    <button
                      onClick={() => removeAvatar(idx)}
                      className="absolute top-2 right-2"
                    >
                      ❌
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
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
        variant="outline"
        icon={SaveSVG}
        iconPosition="left"
        onClick={handleAddForm}
        disabled={forms.length >= maxForms}
      >
        Add an Entry
      </Button>
    </div>
  );
};

export default ValuePropositionSection;
