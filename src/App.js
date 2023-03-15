import React, { useState, } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import "./style.css";

export function isSorted(dateArray) {
  // Check if the array is sorted in ascending order
  let isAscending = true;
  
  for (let i = 1; i < dateArray.length; i++) {
    if (dateArray[i] < dateArray[i - 1]) {
      isAscending = false;
      break;
    }
  }
  return isAscending;
}



export default function App() {

  const [cards, setCards] = useState([
    { id: 1, name: "card1", date: new Date("2022-01-01") },
    { id: 2, name: "card2", date: new Date("2021-12-25") },
    { id: 3, name: "card3", date: new Date("2021-11-30") },
    { id: 4, name: "card4", date: new Date("2022-03-01") },
    { id: 5, name: "card5", date: new Date("2021-08-15") },
    { id: 6, name: "card6", date: new Date("2021-09-07") },
    { id: 7, name: "card7", date: new Date("2022-02-14") },
    { id: 8, name: "card8", date: new Date("2021-10-20") },
    { id: 9, name: "card9", date: new Date("2021-07-01") },
    { id: 10, name: "card10", date: new Date("2022-01-15") },
    { id: 11, name: "card11", date: new Date("2021-11-01") },
    { id: 12, name: "card12", date: new Date("2021-12-31") },
    { id: 13, name: "card13", date: new Date("2022-02-28") },
    { id: 14, name: "card14", date: new Date("2021-09-30") },
    { id: 15, name: "card15", date: new Date("2022-03-14") },
    { id: 16, name: "card16", date: new Date("2021-08-01") },
    { id: 17, name: "card17", date: new Date("2021-10-10") },
    { id: 18, name: "card18", date: new Date("2022-03-10") },
    { id: 19, name: "card19", date: new Date("2021-07-15") },
    { id: 20, name: "card20", date: new Date("2021-11-15") },
    { id: 21, name: "card21", date: new Date("2022-02-01") },
    { id: 22, name: "card22", date: new Date("2021-08-31") },
    { id: 23, name: "card23", date: new Date("2021-12-01") },
    { id: 24, name: "card24", date: new Date("2022-01-20") },
    { id: 25, name: "card25", date: new Date("2021-09-15") },
    { id: 26, name: "card26", date: new Date("2022-03-07") },
  ]);

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  function getRandomCard(array, excludeId) {
    const filteredArray = excludeId
      ? array.filter((card) => card.id !== excludeId)
      : array;
    const randomIndex = getRandomIndex(filteredArray);
    const randomCard = filteredArray[randomIndex];
    const newArray = array.filter((card) => card.id !== randomCard.id);
    setCards(newArray);
    
    return randomCard;
  }

  const [timelineCards, setTimelineCards] = useState(() => {
    const randomCard = getRandomCard(cards);
    return [randomCard];
  });

  const [nextCard, setNextCard] = useState(() => {
    const filteredCards = cards.filter(
      (card) => card.id !== timelineCards[0].id
    ); // Exclude card in timelineCard
    const randomCard = getRandomCard(filteredCards);
    return randomCard;
  });

  

  const onDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) {
      return;
    }
  
    // Moving card from "nextCard" to "timeline"
    if (
      destination.droppableId === "timeline" &&
      source.droppableId === "nextCard"
    ) {
      setNextCard(getRandomCard(cards));
  
      const newTimelineCards = [...timelineCards];
      newTimelineCards.splice(destination.index,0,nextCard);

      const timelineDates = newTimelineCards.map((card) => card.date);



      if (isSorted(timelineDates) === true){
        
        nextCard.placedCorrectly = true;
        console.log("placed correctly")
      }
      else{
        nextCard.placedCorrectly = false;
        console.log("the card isn't placed correctly")
      }

  
      // Sort the timeline cards in ascending order of date
      newTimelineCards.sort((a, b) => {
        return a.date - b.date;
      });
  
      setTimelineCards(newTimelineCards);
       



    }
  };

  // useEffect(() => {
  //   console.log("Timeline Card at the start: ", timelineCard);
  // }, []);

  return (
    <div className="container py-5">
      <DragDropContext onDragEnd={onDragEnd} >
        <div style={{ padding: "20px", border: "solid" }}>
          <Droppable droppableId="nextCard" >
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable draggableId={`card-${nextCard.id}`} index={0}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <Card
                        card={nextCard}
                        draggableId={`card-${nextCard.id}`}
                        bgNumber={nextCard.id}
                        

                        
                      />
                    </div>
                  )}
                </Draggable>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div style={{ padding: "20px", border: "solid" }}>
          <Droppable id="timeline" droppableId="timeline">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {timelineCards.map((card, index) => (
                  <Draggable
                    key={card.id}
                    draggableId={`card-${card.id}`}
                    index={index}
                    isDragDisabled={true}
                    
                  >
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Card
                          key={card.id}
                          card={card}
                          draggableId={`card-${card.id}`}
                          placedCorrectly = {card.placedCorrectly}
                          
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}
