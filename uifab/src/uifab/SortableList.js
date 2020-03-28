import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Box from './Box';
import stylex from './stylex';

function SortableList(props) {
  const {
    bgDragging, bgNormal,
    className, items,
    onItemKey, onRenderItem, onReordered,
    spacing,
  } = props;
  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) {
          return;
        }
        const reorderedData = Array.from(items);
        const [removed] = reorderedData.splice(result.source.index, 1);
        reorderedData.splice(result.destination.index, 0, removed);
        if (onReordered) {
          onReordered(reorderedData);
        }
      }}
    >
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Droppable droppableId="droppable">
        {(droppableProvided, droppableSnapshot) => (
          <Box
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            bg={droppableSnapshot.isDraggingOver ? bgDragging : bgNormal}
            className={className}
          >
            {items.map((item, i) => (
              <Draggable
                key={(onItemKey && onItemKey(item)) || i}
                draggableId={(onItemKey && onItemKey(item)) || i}
                index={i}
              >
                {(provided, snapshot) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    mb={spacing}
                  >
                    {onRenderItem && onRenderItem(item, snapshot.isDragging)}
                  </Box>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </Box>
        )}
      </Droppable>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </DragDropContext>
  );
}

SortableList.propTypes = {
  bgDragging: PropTypes.string,
  bgNormal: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  onItemKey: PropTypes.func,
  onRenderItem: PropTypes.func,
  onReordered: PropTypes.func,
  spacing: PropTypes.number,
};

SortableList.defaultProps = {
  bgDragging: 'light',
  bgNormal: 'inherit',
  className: null,
  items: [],
  onItemKey: null,
  onRenderItem: null,
  onReordered: null,
  spacing: 3,
};

export default stylex(SortableList);
