import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import './style.css';

export default function App() {

  const [timelines, setTimelines] = useState([
    { id: 1, name: 'Next Card' },
    { id: 2, name: 'Timeline' },
  ]);
  const [cards, setCards] = useState([
    { id: 1, name: 'card1', timeline: 1 },
    { id: 2, name: 'card2', timeline: 2 },
  ]);

  const rearangeArr = (arr, sourceIndex, destIndex) => {
    const arrCopy = [...arr];
    const [removed] = arrCopy.splice(sourceIndex, 1);
    arrCopy.splice(destIndex, 0, removed);

    return arrCopy;
  };

  const onDragEnd = (result) => {
    console.log(result);
    
    // const { source, destination } = result;

    // if (!destination) {
    //   return;
    // }

    // if (destination.droppableId === 'Timelines') {
    //   // a category was moved
    //   setTimelines(rearangeArr(timelines, source.index, destination.index));
    // } else if (destination.droppableId !== source.droppableId) {
    //   // find the source in cards array and change with destination droppable id
    //   setCards((cards) =>
    //     cards.map((card) =>
    //       card.id === parseInt(result.draggableId)
    //         ? {
    //             ...card,
    //             timeline: parseInt(result.destination.droppableId),
    //           }
    //         : card
    //     )
    //   );
    // } else {
    //   // rearange the array if it is in the same category

    //   setCards(rearangeArr(cards, source.index, destination.index));
    // }
  };

  return (
    <div className="container py-5">
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="timeline" key={`card-${card.id}`}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {cards.map((card, cardIndex) => (
                  <Draggable draggableId={`card-${card.id}`} index={cardIndex} key={`card-${card.id}`}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Card
                          key={card.id}
                          card={{ id: card.id, name: card.name }}
                        ></Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* <Droppable droppableId="Timelines" type="droppableItem">
            {(provided) => (
              <div ref={provided.innerRef}>
                {timelines.map((timeline, index) => (
                  <Draggable
                    draggableId={`timeline-${timeline.id}`}
                    key={`timeline-${timeline.id}`}
                    index={index}
                  >
                    {(parentProvider) => (
                      <div
                        ref={parentProvider.innerRef}
                        {...parentProvider.draggableProps}
                      >
                        <Droppable droppableId={timeline.id.toString()}>
                          {(provided) => (
                            <div ref={provided.innerRef}>
                              <ul className="list-unstyled border p-3 mb-3">
                                
                                <h6
                                  className="h6 mb-3"
                                  {...parentProvider.dragHandleProps}
                                >
                                  {timeline.name}
                                </h6>
                                {cards
                                  .filter(
                                    (card) => card.timeline === timeline.id
                                  )
                                  .map((card, index) => (
                                    <Draggable
                                      draggableId={card.id.toString()}
                                      key={card.id}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <div >
                                            <Card card={card} />
                                          
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                {provided.placeholder}
                              </ul>
                            </div>
                          )}
                        </Droppable>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable> */}
        </div>
      </DragDropContext>
    </div>
  );
}
