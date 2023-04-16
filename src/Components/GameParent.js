import React, { useState } from "react";
import TimelineApp from "./TimelineApp";

export default function GameParent() {


    const [refreshCount, setRefreshCount] = useState(0);
    const [introModalOpen, setIntroModalOpen] = useState(true);

    return (
        <TimelineApp key={refreshCount} onIntroModalClosed={() => setIntroModalOpen(false)} introModalOpen={introModalOpen} onRefresh={() => setRefreshCount(refreshCount +1)}></TimelineApp>
    )


}