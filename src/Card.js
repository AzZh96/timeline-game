import { format } from 'date-fns'

export default function Card({placedCorrectly, card}) {
  let style = {};
  if(placedCorrectly === true){
    style={background: 'green'}
  }
  else if(placedCorrectly === false){
    style={background: 'red'}
  }


  return (
    <div
      style={style}
      className="card"
      data-date={card.date}
    >
      {card.id} {card.name} {format(card.date, 'yyyy-MM-dd')}
    </div>
  );
}
