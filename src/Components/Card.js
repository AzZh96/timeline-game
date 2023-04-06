import { format } from 'date-fns'

export default function Card({ card, dateShown, idShown = false }) {
  let background = {};
  if (card.placedCorrectly === true) {
    //score
    background = '#BCFCBB'
  } else if (card.placedCorrectly === false) {
    background = '#FCBBBB'
  }

 

  const nameStyle = {
    marginTop: 15,
    fontSize: '12.5px',
    textAlign: 'center',
    margin: 'auto',
    fontWeight: "bolder",
    color: "#002F6C"
  }
  const cardStyle = {
    width: '150px',
    height: '170px',
    background: background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center', // Changed from "flex-start"
    padding: '10px',
    position: 'relative', // Added to create a stacking context for the absolute positioning of dateStyle
  }
  
  const dateStyle = {
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: "bolder",
    color: "#002F6C",
    position: "absolute",
    bottom: "10px",
    width: "100%",
    display: "flex", // Added
    justifyContent: "center", // Added
    
  }
  

  return (
    <div
      style={cardStyle}
      className="card"
      data-date={card.date}
      dateShown={dateShown}
      idShown={idShown}
    >
      {idShown && <div>{card.id}</div>}
      <div style={nameStyle}>{card.name}</div>
      {dateShown && <div style={dateStyle}>{format(card.date, 'yyyy')}</div>}
    </div>
  );
}
