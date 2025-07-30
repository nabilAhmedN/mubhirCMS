
import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';

const SubjectCards = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    altText: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const maxForms = 4;
  const maxAvatars = 4;

  const [forms, setForms] = useState([]);

  const handleAddForm = () => {
    if (forms.length < maxForms) {
      setForms([...forms, { id: `${Date.now()}`, title: '', description: '', altText: '', avatars: [] }]);
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

  // Sensors for pointer-based dragging
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Requires 8px movement to start drag
      },
    })
  );

  // Handle drag end to reorder forms
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setForms((prev) => {
        const oldIndex = prev.findIndex((form) => form.id === active.id);
        const newIndex = prev.findIndex((form) => form.id === over.id);
        const updatedForms = [...prev];
        const [movedForm] = updatedForms.splice(oldIndex, 1);
        updatedForms.splice(newIndex, 0, movedForm);
        return updatedForms;
      });
    }
  };

  // Draggable and droppable form component
  const DraggableForm = ({ form, index }) => {
    const { attributes, listeners, setNodeRef: setDraggableRef, transform } = useDraggable({
      id: form.id,
    });

    const { setNodeRef: setDroppableRef, isOver } = useDroppable({
      id: form.id,
    });

    // Combine refs for draggable and droppable
    const setNodeRef = (element) => {
      setDraggableRef(element);
      setDroppableRef(element);
    };

    const style = {
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      transition: transform ? 'transform 0.2s ease' : undefined,
      backgroundColor: isOver ? '#f0f0f0' : undefined,
    };

    return (
        <div className='w-[720px] bg-white rounded-lg shadow-md text-black border-1 border-[#D0D5DD]'>

        </div>
    );
  };

  const SaveSVG = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6.66667V13.3333M6.66667 10H13.3333M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z"
        stroke="#344054"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="w-[720px] bg-white rounded-lg shadow-md text-black border-1 border-[#D0D5DD]">
      <h2 className="text-lg text-[#101828] px-[16px] py-[22px] font-semibold mb-4 border-b-1 border-[#EAECF0]">
        Subject Cards
      </h2>

      <div className="mb-6 px-6">
        <h3 className="text-lg font-medium mb-2 text-[#101828]">
          Subject Cards ({forms.length} of {maxForms})
        </h3>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          {forms.map((form, index) => (
            <DraggableForm key={form.id} form={form} index={index} />
          ))}
        </DndContext>

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

      <div className="flex justify-end space-x-4 border-t-1 border-[#EAECF0] py-[16px] pr-[16px]">
        <Button variant="outline">Discard</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
};

export default SubjectCards;
