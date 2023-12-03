import React from "react";
import Item from "./portfolio_item/Item";
import { ItemPorfolio } from "@/constants";

const Portfolio = () => {
  return (
    <div className="w-full bg-black py-10 ">
      <div className="w-[1366px] mx-auto  text-white">
        <h1 className="text-5xl text-left mb-5 underline underline-offset-8">
          Portfolio
        </h1>
        <div className="grid grid-cols-3 gap-x-5 gap-y-8 py-5">
          <Item
            title={ItemPorfolio.title}
            description={ItemPorfolio.description}
            image={ItemPorfolio.image}
          />
          <Item
            title={ItemPorfolio.title}
            description={ItemPorfolio.description}
            image={ItemPorfolio.image}
          />
          <Item
            title={ItemPorfolio.title}
            description={ItemPorfolio.description}
            image={ItemPorfolio.image}
          />
          <Item
            title={ItemPorfolio.title}
            description={ItemPorfolio.description}
            image={ItemPorfolio.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
