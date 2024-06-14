import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { homeGridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {homeGridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
