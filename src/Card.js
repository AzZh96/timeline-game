import React from 'react';

export default function Card({card}) {
  return (
    <div>
      {card.id} {card.name}
    </div>
  );
}