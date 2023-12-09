import React from "react";
import Item from "./portfolio_item/Item";
import { ItemPorfolio } from "@/constants";
import { playfairDisplay } from "@/lib/fonts";

const Portfolio = () => {
  return (
    <div className="w-full bg-black py-10 " id="porfolio">
      <div className="w-[1366px] mx-auto  text-white">
        <h1
          className={`text-5xl text-left mb-5 underline underline-offset-8 ${playfairDisplay.className} py-5`}
        >
          Portfolio
        </h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 py-10">
          <Item data={ItemPorfolio} />
          <Item data={ItemPorfolio} />
          <Item data={ItemPorfolio} />
          <Item data={ItemPorfolio} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
