import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import Score from "./Score";
import Lives from "./Lives";
import { Modal, Box, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import "../Styles/style.css";
import "../Styles/fonts.css";
import React, { useState, useEffect } from "react";
export default function TimelineApp({
  onRefresh,
  onIntroModalOpen,
  onIntroModalClosed,
  introModalOpen,
}) {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Alan Turing creates the concept of a Universal Turing Machine, laying the foundation for modern computers.",
      date: new Date("1936"),
    },
    {
      id: 2,
      name: "The first programmable computer, the Harvard Mark I, is completed.",
      date: new Date("1944"),
    },
    {
      id: 3,
      name: "John von Neumann designs the architecture of modern computers, including the concept of stored programs.",
      date: new Date("1945"),
    },
    {
      id: 4,
      name: "Grace Hopper develops the first compiler, allowing high-level programming languages to be translated into machine code.",
      date: new Date("1952"),
    },
    {
      id: 5,
      name: "The first commercial computer, the UNIVAC I, is installed at the United States Census Bureau.",
      date: new Date("1951"),
    },
    {
      id: 6,
      name: "The first computer mouse is invented by Douglas Engelbart.",
      date: new Date("1964"),
    },
    {
      id: 7,
      name: "The first public demonstration of the graphical user interface (GUI) is given by Xerox PARC.",
      date: new Date("1973"),
    },
    {
      id: 8,
      name: "The first microprocessor, the Intel 4004, is developed by Intel.",
      date: new Date("1971"),
    },
    {
      id: 9,
      name: "The first email is sent by Ray Tomlinson.",
      date: new Date("1971"),
    },
    {
      id: 10,
      name: "The first spreadsheet program, VisiCalc, is released.",
      date: new Date("1979"),
    },
    {
      id: 11,
      name: "The first web browser, WorldWideWeb, is developed by Tim Berners-Lee.",
      date: new Date("1989"),
    },
    {
      id: 12,
      name: "The first search engine, Archie, is created.",
      date: new Date("1990"),
    },
    {
      id: 13,
      name: "The first commercial web browser, Netscape Navigator, is released.",
      date: new Date("1994"),
    },
    {
      id: 14,
      name: "The first successful search engine, Google, is launched.",
      date: new Date("1998"),
    },
    {
      id: 15,
      name: "The first smartphone, IBM Simon, is introduced.",
      date: new Date("1993"),
    },
    {
      id: 16,
      name: "The first iPhone is released by Apple.",
      date: new Date("2007"),
    },
    {
      id: 17,
      name: "The first blockchain, used for Bitcoin, is created by Satoshi Nakamoto.",
      date: new Date("2008"),
    },
    {
      id: 18,
      name: "The first quantum computer, developed by D-Wave Systems, is sold to Lockheed Martin.",
      date: new Date("2011"),
    },
    {
      id: 19,
      name: "The first photo of a black hole is captured by the Event Horizon Telescope.",
      date: new Date("2019"),
    },
    {
      id: 20,
      name: "Charles Babbage designs the Analytical Engine, an early mechanical computer.",
      date: new Date("1822"),
    },
    {
      id: 21,
      name: "James Gregory discovers Taylor's Theorem.",
      date: new Date("1671"),
    },
    {
      id: 22,
      name: "The Altair 8800, one of the first personal computers, is introduced.",
      date: new Date("1974"),
    },
    {
      id: 23,
      name: "The IBM PC is introduced.",
      date: new Date("1981"),
    },
    {
      id: 24,
      name: "The Apple Macintosh is introduced.",
      date: new Date("1984"),
    },
    {
      id: 25,
      name: "Greece, Heron of Alexandria, (Hero) the earliest fleeting reference to square roots of negative numbers.",
      date: new Date("0050"),
    },
    {
      id: 26,
      name: "The first iPhone is introduced.",
      date: new Date("2001"),
    },
    {
      id: 27,
      name: "Andrew Wiles proves Fermat's Last Theorem, a problem that had remained unsolved for over 350 years",
      date: new Date("1994"),
    },

    {
      id: 28,
      name: "The first Apple Watch is introduced.",
      date: new Date("2015"),
    },
    {
      id: 29,
      name: "The COVID-19 pandemic accelerates the adoption of remote work and online learning.",
      date: new Date("2020"),
    },
    {
      id: 30,
      name: "Blaise Pascal invents the first mechanical calculator, the Pascaline.",
      date: new Date("1642"),
    },
    {
      id: 31,
      name: "Yitang Zhang proves that there are infinitely many pairs of prime numbers that differ by at most 70 million, a major breakthrough in number theory",
      date: new Date("2012"),
    },

    {
      id: 32,
      name: "The first electronic computer, the Colossus Mark I, is completed in England.",
      date: new Date("1943"),
    },
    {
      id: 33,
      name: "IBM introduces the first hard disk drive, the IBM 305 RAMAC.",
      date: new Date("1956"),
    },
    {
      id: 34,
      name: "The first video game, Tennis for Two, is created by physicist William Higinbotham.",
      date: new Date("1958"),
    },
    {
      id: 35,
      name: "The first computer mouse with two buttons is invented by Bill English.",
      date: new Date("1965"),
    },
    {
      id: 36,
      name: "The first Unix operating system is developed by Ken Thompson and Dennis Ritchie.",
      date: new Date("1969"),
    },
    {
      id: 37,
      name: "Microsoft is founded by Bill Gates and Paul Allen.",
      date: new Date("1975"),
    },
    {
      id: 38,
      name: "The first IBM PC compatible computer, the Compaq Portable, is introduced.",
      date: new Date("1983"),
    },
    {
      id: 39,
      name: "The first website is launched by CERN.",
      date: new Date("1991"),
    },
    {
      id: 40,
      name: "The first MP3 player, the MPMan, is introduced.",
      date: new Date("1997"),
    },
    {
      id: 41,
      name: "Facebook is founded by Mark Zuckerberg.",
      date: new Date("2004"),
    },
    {
      id: 42,
      name: "Amazon Web Services (AWS) is launched.",
      date: new Date("2006"),
    },
    {
      id: 43,
      name: "The first Android smartphone, the HTC Dream, is released.",
      date: new Date("2008"),
    },
    {
      id: 44,
      name: "The first iPad is introduced by Apple.",
      date: new Date("2010"),
    },
    {
      id: 45,
      name: "The first commercially available self-driving car, the Tesla Model S, is introduced.",
      date: new Date("2015"),
    },
    {
      id: 46,
      name: "Google's AlphaGo defeats world champion Lee Sedol in the ancient Chinese game of Go.",
      date: new Date("2016"),
    },
    {
      id: 47,
      name: "René Descartes introduces the Cartesian coordinate system, allowing the use of algebraic equations to describe geometric shapes.",
      date: new Date("1637"),
    },
    {
      id: 48,
      name: "Sir Isaac Newton develops calculus.",
      date: new Date("1665"),
    },
    {
      id: 49,
      name: "Konrad Zuse builds the Z3, the first programmable computer.",
      date: new Date("1941"),
    },
    {
      id: 50,
      name: "ENIAC, the first electronic computer, is completed.",
      date: new Date("1946"),
    },
    {
      id: 51,
      name: "FORTRAN, the first high-level programming language, is developed.",
      date: new Date("1956"),
    },
    {
      id: 52,
      name: "IBM releases the System/360, the first mainframe computer family.",
      date: new Date("1964"),
    },
    {
      id: 53,
      name: "Apple releases the Apple I, one of the first personal computers.",
      date: new Date("1975"),
    },
    {
      id: 54,
      name: "John Wallis discovers the infinite product representation for pi",
      date: new Date("1655"),
    },
    {
      id: 55,
      name: "Gottfried Wilhelm Leibniz introduces the integral calculus",
      date: new Date("1702"),
    },
    {
      id: 56,
      name: "Leonhard Euler solves the Seven Bridges of Konigsberg problem",
      date: new Date("1736"),
    },
    {
      id: 57,
      name: "Augustin-Louis Cauchy introduces the concept of limit in calculus",
      date: new Date("1821"),
    },
    {
      id: 58,
      name: "William Rowan Hamilton invents quaternions",
      date: new Date("1843"),
    },
    {
      id: 59,
      name: "Bernhard Riemann introduces the concept of a manifold",
      date: new Date("1858"),
    },
    {
      id: 60,
      name: "Hermann Minkowski introduces the concept of four-dimensional spacetime",
      date: new Date("1908"),
    },
    {
      id: 61,
      name: "Kurt Gödel proves his incompleteness theorems",
      date: new Date("1931"),
    },
    {
      id: 62,
      name: "John Horton Conway invents the Game of Life",
      date: new Date("1967"),
    },
    {
      id: 63,
      name: "David Hilbert introduces the Hilbert space, a fundamental concept in functional analysis",
      date: new Date("1901"),
    },
    {
      id: 64,
      name: "Felix Hausdorff publishes his landmark book 'Grundzüge der Mengenlehre', which lays the foundations of modern set theory",
      date: new Date("1918"),
    },
    {
      id: 65,
      name: "Paul Dirac formulates the Dirac equation, which describes the behavior of fermions in relativistic quantum mechanics",
      date: new Date("1928"),
    },

    {
      id: 66,
      name: "Claude Shannon publishes 'A Mathematical Theory of Communication', laying the foundation for the field of information theory",
      date: new Date("1947"),
    },
    {
      id: 67,
      name: "John Forbes Nash Jr. publishes his paper 'Non-Cooperative Games', introducing the concept of Nash equilibrium in game theory",
      date: new Date("1954"),
    },
    {
      id: 68,
      name: "Paul Cohen proves the independence of the continuum hypothesis from Zermelo-Fraenkel set theory",
      date: new Date("1963"),
    },
    {
      id: 69,
      name: "Robert Langlands formulates the Langlands program, a far-reaching set of conjectures that connects number theory and representation theory",
      date: new Date("1978"),
    },
    /*
    {
      id: 70,
      name: "",
      date: new Date(""),
    },
    {
      id: 71,
      name: "",
      date: new Date(""),
    },
    
{
  id: 72,
  name: "",
  date: new Date(""),
},
{
  id: 73,
  name: "",
  date: new Date(""),
},
{
  id: 74,
  name: "",
  date: new Date(""),
},
{
  id: 75,
  name: "",
  date: new Date(""),
},
{
  id: 76,
  name: "",
  date: new Date(""),
},
{
  id: 77,
  name: "",
  date: new Date(""),
},
{
  id: 78,
  name: "",
  date: new Date(""),
},
{
  id: 79,
  name: "",
  date: new Date(""),
},
{
  id: 80,
  name: "",
  date: new Date(""),
},
{
  id: 81,
  name: "",
  date: new Date(""),
},
{
  id: 82,
  name: "",
  date: new Date(""),
},
{
  id: 83,
  name: "",
  date: new Date(""),
},
{
  id: 84,
  name: "",
  date: new Date(""),
},
{
  id: 85,
  name: "",
  date: new Date(""),
},
{
  id: 86,
  name: "",
  date: new Date(""),
},
{
  id: 87,
  name: "",
  date: new Date(""),
},
{
  id: 88,
  name: "",
  date: new Date(""),
},
{
  id: 89,
  name: "",
  date: new Date(""),
},
{
  id: 90,
  name: "",
  date: new Date(""),
},
{
  id: 91,
  name: "",
  date: new Date(""),
},
{
  id: 92,
  name: "",
  date: new Date(""),
},
{
  id: 93,
  name: "",
  date: new Date(""),
},
{
  id: 94,
  name: "",
  date: new Date(""),
},
{
  id: 95,
  name: "",
  date: new Date(""),
},
{
  id: 96,
  name: "",
  date: new Date(""),
},
{
  id: 97,
  name: "",
  date: new Date(""),
},
{
  id: 98,
  name: "",
  date: new Date(""),
},
{
  id: 99,
  name: "",
  date: new Date(""),
},
{
  id: 100,
  name: "",
  date: new Date(""),
}

    
    */
  ]);

  console.log(cards);

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const getRandomCard = (array, excludeIds) => {
    const filteredArray = excludeIds
      ? array.filter((card) => !excludeIds.includes(card.id))
      : array;
    if (filteredArray.length === 0) {
      setLives(0);
      return null;
    }
    const randomIndex = getRandomIndex(filteredArray);
    const randomCard = filteredArray[randomIndex];
    const newArray = array.filter((card) => card.id !== randomCard.id);
    setCards(newArray);
    return randomCard;
  };

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

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

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
      const newNextCard = getRandomCard(cards);
      if (newNextCard === null) {
        // No more cards left in the deck
        return;
      }
      setNextCard(newNextCard);
      const newTimelineCards = [...timelineCards];
      newTimelineCards.splice(destination.index, 0, nextCard);
      const timelineDates = newTimelineCards.map((card) => card.date);

      if (isSorted(timelineDates) === true) {
        nextCard.placedCorrectly = true;
        const newScore = score + 100;
        setScore(newScore);
      } else {
        nextCard.placedCorrectly = false;
        const newLives = lives - 1;
        setLives(newLives);
      }
      // Sort the timeline cards in ascending order of date
      newTimelineCards.sort((a, b) => {
        return a.date - b.date;
      });
      setTimelineCards(newTimelineCards);
    }
  };

  function isSorted(dateArray) {
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

  // state for modal open/close
  const [modalOpenGame, setModalOpenGame] = useState(false);

  // handle modal close
  const handleIntroModalClose = () => {
    onIntroModalClosed();
  };
  const handleModalOpenGame = () => {
    setModalOpenGame(true);
    
    onIntroModalOpen();
  };
  const grid = 0.2;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    margin: `0 ${grid}vw 0 0`,
    borderRadius: 8,

    // change background colour if dragging
    background: isDragging
      ? "rgba(63, 81, 181, 0.3)"
      : "rgba(63, 81, 181, 0.1)",

    // styles we need to apply on draggables
    ...draggableStyle,
  });
  useEffect(() => {
    if (cards.length === 1) {
      setModalOpenGame(true);
    }
  }, [cards]);

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver
      ? "rgba(212, 172, 13, 0.5)"
      : "rgba(255, 255, 255, 0.1)",
    display: "flex",
    border: "solid 0.3vw rgba(63, 81, 181)",
    padding: grid,
    overflow: "auto",
    borderRadius: "0.3vw",
    marginLeft: "0.5vw",
    marginRight: "0.5vw",
  });

  return (
    <div
      style={{
        background: "rgba(179, 211, 252)",
      }}
    >
      <Modal
        open={introModalOpen}
        onClose={handleIntroModalClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(179, 211, 252)",
        }}
      >
        <Box
          sx={{
            width: "90vw",
            height: "90vh",
            bgcolor: "rgba(179, 211, 252)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "4vw",
            boxShadow: "24",
            outline: "none",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#002F6C",
              fontSize: "3vw",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            Welcome to Digital Dynasties
          </h1>
          <div>
            <h2
              style={{
                textAlign: "center",
                color: "#002F6C",
                fontSize: "2vw",
                textDecoration: "underline",
                fontFamily: "Roboto Mono, monospace",
                marginTop: "0.5vh",
              }}
            >
              Instructions
            </h2>

            <ul style={{ width: "50vw", height: "40vh", margin: "1vh" }}>
              <li>
                The objective of the game is to arrange the given cards in the
                correct chronological order.{" "}
              </li>
              <li>
                Upon starting, you will see one card without the date outside of
                the timeline and one card on the timeline, with its date shown.{" "}
              </li>
              <li>
                Drag the card to the left or right of the timeline card to
                decide whether the event happened before or after it.{" "}
              </li>
              <li>
                If you think the card event happened before the pre-placed card
                on the timeline, place it to the left.{" "}
              </li>
              <li>
                If you think it the card event happened later, place it to the
                right.{" "}
              </li>
              <li>
                The more cards placed on the timeline, the more difficult it is
                to place the next card correctly.{" "}
              </li>
              <li>
                If you place a Card correctly, it will highlight{" "}
                <span style={{ color: "darkgreen" }}>green</span>, if
                incorrectly, it will highlight{" "}
                <span style={{ color: "red" }}>red.</span>
              </li>
              <li>Each correct placement earns you 100 points! </li>
              <li>Each incorrect placement costs you 1 life.</li>
              <li>You have three lives, use them wisely!</li>
            </ul>
          </div>

          <div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#002F6C",
                color: "#fff",
                borderRadius: "0.5vw",
                marginTop: "10vh",
                fontSize: "1.5vw",
                fontFamily: "Roboto Mono, monospace",
                width: "13vw",
                height: "8vh",
              }}
              onClick={handleIntroModalClose}
            >
              {modalOpenGame === false ? <p>Start Game</p> : <p>Resume Game</p>}
            </Button>
          </div>
        </Box>
      </Modal>
      <h1
        style={{
          textAlign: "center",
          color: "#002F6C",
          fontSize: "3vw",
          margin: "0 0 2vh",
          fontFamily: "Roboto Mono, monospace",
          textDecoration: "underline",
        }}
      >
        Digital Dynasties
      </h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginLeft: "19.5vw",
            }}
          >
            <h2
              id="parent-modal-title"
              style={{
                marginBottom: "1.6vh",
                fontFamily: "Roboto Mono, monospace",
                color: "#002F6C",
                fontWeight: "bolder",
                fontSize: "1.3vw",
              }}
            >
              Drag this Card <br></br>onto the Timeline!
            </h2>
            <div
              style={{
                width: "11.9vw",
                height: "28.2vh",
                justifyContent: "center",
                margin: "0vw",
                borderRadius: "0.8vw",
                border: "solid 0.3vw rgba(63, 81, 181)",
                background: "rgba(255, 255, 255, 0.4)",
              }}
            >
              <Droppable droppableId="nextCard" direction="horizontal">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable
                      className="nextCard"
                      draggableId={`card-${nextCard.id}`}
                      index={0}
                    >
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
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3vh",
                marginRight: "0",
              }}
            >
              <div style={{ marginBottom: "0.5vh" }}>
                <IconButton
                  style={{ color: "#002F6C" }}
                  onClick={() => handleModalOpenGame()}
                >
                  <InfoIcon sx={{ fontSize: "3vw" }}></InfoIcon>
                </IconButton>
              </div>
              <Score score={score} />
              <Lives lives={lives} />
              <Button
                onClick={() => {
                  onRefresh();
                }}
                style={{
                  backgroundColor: "#002F6C",
                  color: "#fff",
                  borderRadius: "0.5vw",
                  padding: "0.7vw",
                  fontSize: "1.3vw",
                  fontFamily: "Roboto Mono, monospace",
                  marginBottom: "2vh",
                  width: "11.8vw",
                  height: "7.5vh",
                }}
              >
                Restart
              </Button>
            </div>
          </div>
        </div>
        <h2
          style={{
            margin: "0.5vw",
            marginLeft: "0.5vw",
            fontFamily: "Roboto Mono, monospace",
            color: "#002F6C",
            fontWeight: "bold",
            fontSize: "1.3vw",
          }}
        >
          Timeline:
        </h2>
        <Droppable droppableId="timeline" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="timelineList"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {timelineCards.map((card, index) => (
                <Draggable
                  key={card.id}
                  draggableId={`card-${card.id}`}
                  index={index}
                  isDragDisabled={true}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Card
                        key={card.id}
                        card={card}
                        dateShown={true}
                        draggableId={`card-${card.id}`}
                      />
                    </div>
                  )}
                </Draggable>
              ))}{" "}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {lives === 0 && (
          <>
            <Modal open={true} style={{ position: "fixed", top: "-50%" }}>
              <Box sx={{ ...modalStyle }}>
                <h2
                  id="parent-modal-title"
                  style={{
                    marginTop: "auto",
                    marginBottom: "1.6vh",
                    fontSize: "2.4vw",
                    fontWeight: "bold",
                    fontFamily: "Roboto Mono, monospace",
                    color: "#002F6C",
                  }}
                >
                  Game Over!!
                </h2>
                <Score score={score} />
                <Button
                  onClick={() => {
                    onRefresh();
                  }}
                  style={{
                    backgroundColor: "#002F6C",
                    color: "#fff",
                    borderRadius: "0.5vw",
                    padding: "0.7vw",
                    fontSize: "1.3vw",
                    fontFamily: "Roboto Mono, monospace",
                    marginBottom: "2vh",
                    width: "10vw",
                    height: "7vh",
                  }}
                >
                  Play Again
                </Button>
              </Box>
            </Modal>
          </>
        )}
      </DragDropContext>
    </div>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "30vh",
  background: "rgba(179, 211, 252)",
  borderRadius: "0.8vw",
  padding: "1.6vw",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 2vw rgba(63, 81, 181)", // add boxShadow property
  outline: "none",
};
