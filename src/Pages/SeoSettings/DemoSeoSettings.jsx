import React, {useState} from 'react'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'
import RadioToggle from '../../components/RadioToggle/RadioToggle'
import TextareaField from '../../components/TextareaField/TextareaField'
import Dropdown from '../../components/Dropdown/Dropdown'
import ImageUploader from '../../components/ImageUploader/ImageUploader'

const DemoSeoSettings = () => {

    // radio button
    const [indexing, setIndexing] = useState("allow");
    const [following, setFollowing] = useState("allow");
    const [xml, setXml] = useState("allow");

    // drop menu
    const [ogtSelectedOption, setOgtSelectedOption] = useState('Website');
    const [twitterSelectedOption, setTwitterSelectedOption] = useState('Website');
    const [languageSelectedOption, setLanguageSelectedOption] = useState('en-US');

    // input field
    const [formData, setFormData] = useState({
        pageTitle: "",
        h1Heading: "",
        Canonical: "",
        socialTitle: "",
        descriptionSocialMedia: "",
        xTitle: "",
        descriptionXPost: "",
        schemaMarkup: "",
        focusKeyword: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    // image
    const [ogImage, setOgImage] = useState(null);
    const [twitterImage, setTwitterImage] = useState(null);

  return (
    <div className='w-[720px] bg-white rounded-lg shadow-md text-black border-1 border-[#D0D5DD]'>
      {/* Title Section */}
        <h2 className="text-lg text-[#101828] px-[16px] py-[22px] font-semibold mb-4 border-b-1 border-[#EAECF0]">
            SEO Settings
        </h2>

        {/* Main Text Section */}
        <div className='mb-6 px-6'>
            <div className='space-y-[20px]'>
                <div>
                    <InputField
                    label="Page Title (Title Tag) - The title of the page displayed in search results and browser tabs."
                    name="pageTitle"
                    placeholder="Enter title here"
                    value={formData.pageTitle}
                    onChange={handleChange}
                    />

                    <h2 className='text-sm text-[#475467] pt-[6px] font-normal flex justify-end'>
                        0/70 Characters
                    </h2>
                </div>

                <InputField
                label="H1 Heading - The main heading of the page, typically containing primary keywords."
                name="h1Heading"
                placeholder="Enter main heading here"
                value={formData.h1Heading}
                onChange={handleChange}
                />
                <InputField
                label="Canonical URL - Specifies the preferred URL to avoid duplicate content issues."
                name="canonicalUrl"
                placeholder="Enter URL here"
                value={formData.Canonical}
                onChange={handleChange}
                />
            </div>
        </div>

        {/* Meta Robots Tag */}
        <div className='mb-6 px-6'>
            <div className="p-4 bg-[#f9fafb] border border-[#D0D5DD] rounded ">
            <h2 className="text-sm font-medium mb-4 text-[#344054]">Meta Robots Tag - Controls how search engines crawl and index the page.</h2>
            <div className="mb-4">
                <h3 className="text-sm font-normal text-[#344054] mb-[12px]">Indexing</h3>
                <div className="flex items-center space-x-4">
                    <RadioToggle
                        name="indexing"
                        selected={indexing}
                        onChange={setIndexing}
                        options={[
                        { label: "Allow Indexing", value: "allow" },
                        { label: "Block Indexing", value: "block" },
                        ]}
                    />
                </div>
            </div>
            <div>
                <h3 className="text-sm font-normal text-[#344054] mb-[12px]">Following</h3>
                <div className="flex items-center space-x-4">
                    <RadioToggle
                        name="indexing"
                        selected={following}
                        onChange={setFollowing}
                        options={[
                        { label: "Allow Link Following", value: "allow" },
                        { label: "Block Link Following", value: "block" },
                        ]}
                    />
                </div>
            </div>
            </div>
        </div>

        {/* Open Graph Tags */}
        <div className='mb-6 px-6'>
            <div className="p-4 bg-[#f9fafb] border border-[#D0D5DD] rounded ">
                <h2 className="text-sm font-medium mb-4 text-[#344054]">Open Graph Tags - Controls link previews in social media posts</h2>
                <div className='space-y-[20px]'>
                    <InputField
                    label="Title for social media sharing."
                    name="socialTitle"
                    placeholder="Enter title here"
                    value={formData.socialTitle}
                    onChange={handleChange}
                    />

                    <TextareaField
                    label="Description for social media posts."
                    name="descriptionSocialMedia"
                    placeholder="Enter description here"
                    value={formData.descriptionSocialMedia}
                    onChange={handleChange}
                    />
                    <div className="mt-[16px]">
                        <div className="flex space-x-4 mt-2">
                            <ImageUploader
                                id="ogt-image"
                                label="Image displayed when the page is shared"
                                image={ogImage}
                                setImage={setOgImage}
                                labelClassName="text-lg text-purple-700"
                                containerClassName="w-[240px] h-[240px]"
                                dropText='<span style="color: #521749; font-size: 14px; font-weight: 600">Click to upload</span> <br /> or drag and drop<br />(Max: 480x480px)'
                                maxDimensions={{ width: 240, height: 240 }}
                                />
                        </div>
                    </div>

                    <div className='my-4'>
                        <Dropdown
                        label="Content Type"
                        options={['Website', 'Articel']}
                        value={ogtSelectedOption}
                        onChange={setOgtSelectedOption}
                        />
                    </div>

                </div>
            </div>
        </div>

        {/* Open Graph Tags */}
        <div className='mb-6 px-6'>
            <div className="p-4 bg-[#f9fafb] border border-[#D0D5DD] rounded ">
                <h2 className="text-sm font-medium mb-4 text-[#344054]">Twitter Card Tags - Controls the content view on Twitter</h2>
                <div className='space-y-[20px]'>
                    <InputField
                    label="Title for X/Twitter sharing."
                    name="xTitle"
                    placeholder="Enter title here"
                    value={formData.xTitle}
                    onChange={handleChange}
                    />

                    <TextareaField
                    label="Description for social X/Twitter posts."
                    name="descriptionXPost"
                    placeholder="Enter description here"
                    value={formData.descriptionXPost}
                    onChange={handleChange}
                    />
                    <div className="mt-[16px]">
                        <div className="flex space-x-4 mt-2">
                            <ImageUploader
                                id="twitter-image"
                                label="Image for Twitter shares"
                                image={twitterImage}
                                setImage={setTwitterImage}
                                labelClassName="text-lg text-purple-700"
                                containerClassName="w-[240px] h-[240px]"
                                dropText='<span style="color: #333; font-size: 14px; font-weight: 600">Click to upload</span> <br /> or drag and drop<br />(Max: 480x480px)'
                                maxDimensions={{ width: 240, height: 240 }}
                                />
                        </div>
                    </div>

                    <div className='my-4'>
                        <Dropdown
                        label="Content Type"
                        options={['Website', 'Articel']}
                        value={twitterSelectedOption}
                        onChange={setTwitterSelectedOption}
                        />
                    </div>

                </div>
            </div>
        </div>

        <div className='mb-6 px-6'>
            <div className='space-y-[24px]'>
                {/* Schema Markup */}
                <TextareaField
                label="Schema Markup - Structured data to help search engines understand page content (e.g. Schema for an article with headline, author, and date published)."
                name="schemaMarkup"
                placeholder="Enter JSON here"
                value={formData.schemaMarkup}
                onChange={handleChange}
                />

                {/* Focus Keyword */}
                <TextareaField
                label="Focus Keyword - The primary keyword the page targets for SEO. "
                name="focusKeyword"
                placeholder="Enter title here"
                value={formData.focusKeyword}
                onChange={handleChange}
                />

                {/* XML */}
                <h3 className="text-sm font-normal text-[#344054] mb-[12px]">XML Sitemap Inclusion</h3>
                <div className="flex items-center space-x-4">
                    <RadioToggle
                        name="indexing"
                        selected={xml}
                        onChange={setXml}
                        options={[
                        { label: "Include", value: "allow" },
                        { label: "Exclude", value: "block" },
                        ]}
                    />
                </div>

                {/* Language */}
                <Dropdown
                label="Language/Locale - Specifies the language or region for the page"
                options={['en-US']}
                value={languageSelectedOption}
                onChange={setLanguageSelectedOption}
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

export default DemoSeoSettings
