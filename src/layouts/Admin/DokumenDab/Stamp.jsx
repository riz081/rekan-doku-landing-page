import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { NavigationTabs, Quota } from '../../../components';
import { QuotaMaterai as Materai } from '../../../assets';

// Draggable component
function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

// Droppable component
export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = isOver ? 'bg-blue-50' : 'bg-gray-100';

  return (
    <div
      ref={setNodeRef}
      className={`border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[200px] flex justify-center items-center transition ${style}`}
    >
      {props.children}
    </div>
  );
}

const Stamp = () => {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      <img
        src={Materai}
        alt="Materai"
        className="w-[144px] h-[138px] cursor-grab"
      />
    </Draggable>
  );

  return (
    <div>
      {/* Navigation Tabs */}
      <NavigationTabs />
      <DndContext onDragEnd={handleDragEnd}>
        <h3 className="text-lg font-bold mb-4">Bubuhkan Materai pada Dokumen</h3>
        {!parent ? draggable : null}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : 'Drop here'}
        </Droppable>
      </DndContext>
    </div>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
};

export default Stamp;
