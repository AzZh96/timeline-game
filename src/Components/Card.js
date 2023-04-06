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
    
    fontSize: '0.68vw',
    textAlign: 'center',
    margin: 'auto',
    fontWeight: "bolder",
    color: "#002F6C"
  }
  const cardStyle = {
    width: '7.8vw',
    height: '18vh',
    background: background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: '0.53vw',
    position: 'relative', 
  }
  
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
