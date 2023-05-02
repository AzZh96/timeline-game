// Importing the format function from date-fns library
import { format } from 'date-fns'

export default function Card({ card, dateShown, idShown = false }) {

  // Setting the background color of the card based on whether it's placed correctly or not
  let background = {};
  if (card.placedCorrectly === true) {
    background = '#BCFCBB'
  } else if (card.placedCorrectly === false) {
    background = '#FCBBBB'
  }

  // Defining styles for the card name
  const nameStyle = {
    fontSize: '1vw',
    textAlign: 'center',
    margin: 'auto',
    fontWeight: "bolder",
    color: "#002F6C"
  }

  // Defining styles for the card itself
  const cardStyle = {
    width: '10.8vw',
    height: '26vh',
    background: background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: '0.53vw',
    position: 'relative', 
  }

  // Defining styles for the date text displayed at the bottom of the card
  const dateStyle = {
    fontSize: '0.9vw',
    textAlign: 'center',
    fontWeight: "bolder",
    color: "#002F6C",
    position: "absolute",
    bottom: "1vh",
    width: "100%",
    display: "flex", 
    justifyContent: "center", 
  }

  // Returning the card component with the specified styles and props
  return (
    <div
      style={cardStyle}
      className="card"
      data-date={card.date}
      dateShown={dateShown}
      idShown={idShown}
    >
      {/* Displaying the card ID if idShown prop is true */}
      {idShown && <div>{card.id}</div>}
      {/* Displaying the card name */}
      <div style={nameStyle}>{card.name}</div>
      {/* Displaying the card date if dateShown prop is true */}
      {dateShown && <div style={dateStyle}>{format(card.date, 'yyyy')}</div>}
    </div>
  );
}
