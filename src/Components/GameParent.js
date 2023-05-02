import React, { useState } from "react";
import TimelineApp from "./TimelineApp";

export default function GameParent() {
  //variable that holds a count of how many times the component has been refreshed
  const [refreshCount, setRefreshCount] = useState(0);

  //boolean variable that holds whether the introduction modal is open or closed
  const [introModalOpen, setIntroModalOpen] = useState(true);
//passses refresh count to render a new game each reset, aswell as the ability to open and close the intro model on startup
  return (
    <TimelineApp
      key={refreshCount}
      onIntroModalOpen={() => setIntroModalOpen(true)}
      onIntroModalClosed={() => setIntroModalOpen(false)}
      introModalOpen={introModalOpen}
      onRefresh={() => setRefreshCount(refreshCount + 1)}
    ></TimelineApp>
  );
}
