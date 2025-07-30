import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import ImageUploader from '../../components/ImageUploader/ImageUploader';

const CtaSection = () => {
    const [formData, setFormData] = useState({
    altText: "",
    title: "",
    subtitle: "",
    ctaText: "",
    ctaLink: "",
    infoTitle: "",
    infoSubtitle: "",
    infoL1: "",
    infoL2: "",
    infoL3: "",
    sctionCtaSubtitle: "",
    sctionCtaText: "",
    sctionCtaLink: "",
    crCtaText: "",
    crCtaLink: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // image
    const [sectionImage, setSectionImage] = useState(null);
  return (
    <div className="w-[720px] bg-white rounded-lg shadow-md text-black border-1 border-[#D0D5DD]">
      {/* Title Section */}
      <h2 className="text-lg text-[#101828] px-[16px] py-[22px] font-semibold mb-4 border-b-1 border-[#EAECF0]">
        CTA Section
      </h2>

      {/* Info Card */}
      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">Title Section</h3>
        <div className="space-y-[20px]">
          <InputField
            label="Title"
            name="title"
            placeholder="Enter title here"
            value={formData.title}
            onChange={handleChange}
          />
          <InputField
            label="Subtitle"
            name="subtitle"
            placeholder="Enter description here"
            value={formData.subtitle}
            onChange={handleChange}
          />
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
            placeholder="Enter information"
            value={formData.ctaLink}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Bottom-left Avatars and Subtitle */}
      <div className="mb-[32px] px-6">
        <div className="mt-2">
          <div className="flex space-x-4 mt-2">
            <ImageUploader
                id="ogt-image"
                label="Section Image"
                image={sectionImage}
                setImage={setSectionImage}
                // labelClassName="text-lg text-purple-700"
                containerClassName="w-[256px] h-[144px]"
                dropText='<span style="color: #521749; font-size: 14px; font-weight: 600">Click to upload</span>  or drag and drop'
                maxDimensions={{ width: 1000, height: 1000 }}
                />
          </div>
        </div>
        <div className="mt-4">
          <InputField
            label="Alt Text"
            name="altText"
            placeholder="Enter alternative text for the image here"
            value={formData.altText}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Info Card */}
      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">Info Card</h3>
        <div className="space-y-[20px]">
          <InputField
            label="Title"
            name="infoTitle"
            placeholder="Enter title here"
            value={formData.infoTitle}
            onChange={handleChange}
          />
          <InputField
            label="Subtitle"
            name="infoSubtitle"
            placeholder="Enter description here"
            value={formData.infoSubtitle}
            onChange={handleChange}
          />
          <InputField
            label="Info Line 1"
            name="infoL1"
            placeholder="Enter CTA text here"
            value={formData.infoL1}
            onChange={handleChange}
          />
          <InputField
            label="Info Line 2"
            name="infoL2"
            placeholder="Enter information"
            value={formData.infoL2}
            onChange={handleChange}
          />
          <InputField
            label="Info Line 3"
            name="infoL3"
            placeholder="Enter information"
            value={formData.infoL3}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Section CTA */}
      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">Section CTA</h3>
        <div className="space-y-[20px]">
          <InputField
            label="Subtitle"
            name="sctionCtaSubtitle"
            placeholder="Enter CTA text here"
            value={formData.sctionCtaSubtitle}
            onChange={handleChange}
          />
          <InputField
            label="CTA Text"
            name="sctionCtaText"
            placeholder="Enter CTA text here"
            value={formData.sctionCtaText}
            onChange={handleChange}
          />
          <InputField
            label="CTA Link"
            name="sctionCtaLink"
            placeholder="Enter CTA URL here"
            value={formData.sctionCtaLink}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Clutch Reviews CTA */}
      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">Clutch Reviews CTA</h3>
        <div className="space-y-[20px]">
          <InputField
            label="CTA Text"
            name="crCtaText"
            placeholder="E.g. “See our reviews in Clutch”"
            value={formData.crCtaText}
            onChange={handleChange}
          />
          <InputField
            label="CTA Link"
            name="crCtaLink"
            placeholder="Enter CTA URL here"
            value={formData.crCtaLink}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 border-t-1 border-[#EAECF0] py-[16px] pr-[16px]">
        <Button variant="outline">Discard</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  )
}

export default CtaSection
